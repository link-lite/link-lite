import {
  VStack,
  Flex,
  Button,
  Heading,
  Container,
  Alert,
  AlertIcon,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form, Formik, useField } from "formik";
import { FaArrowRight } from "react-icons/fa";
import { FormikInput } from "../../components/forms/FormikInput";
import { FormikSelect } from "../../components/forms/FormikSelect";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./validation";
import { useBackendApi } from "contexts/BackendApi";
import { DeleteModal } from "components/DeleteModal";
import { useDataSourceList } from "api/datasource";
import { getDateDaysAgo } from "helpers/dates";

export const ActivitySource = ({ activitySource, action, id }) => {
  // TODO: Get this from the backend
  const typeOptions = [{ id: "RQUEST" }];
  const { data: datasourceOptions } = useDataSourceList();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activitysource } = useBackendApi();
  const [feedback, setFeedback] = useState();
  const submitText = !activitySource
    ? "Create Activity Source"
    : "Save changes";
  const headingText = !activitySource
    ? "Create a new Activity Source"
    : "Edit Activity Source";

  const navigate = useNavigate();
  const onDeleteSource = async () => {
    await activitysource.delete({ id: id });
    onClose();
    // redirect with a toast
    navigate("/", {
      state: {
        toast: {
          title: "Activity source successfully deleted!",
          status: "success",
          duration: 2500,
          isClosable: true,
        },
      },
    });
  };
  const handleSubmit = async (values, actions) => {
    try {
      // convert all empty strings to null
      const payload = Object.entries(values).reduce(
        (a, [k, v]) => ({
          ...a,
          [k]: v !== "" ? v : null,
        }),
        {}
      );
      // post to the api
      await action({
        values: { ...payload, TargetDataSourceName: payload.DataSource.id },
        id: id,
      }).json();

      // redirect with a toast
      navigate("/", {
        state: {
          toast: {
            title: "Activity source successfully submitted!",
            status: "success",
            duration: 2500,
            isClosable: true,
          },
        },
      });
    } catch (e) {
      console.error(e);
      setFeedback("Something went wrong!");
      window.scrollTo(0, 0);
    }
    actions.setSubmitting(false);
  };

  return (
    <Container>
      <VStack w="100%" align="stretch" p={4}>
        <Heading>{headingText}</Heading>
        <Formik
          onSubmit={handleSubmit}
          initialValues={
            activitySource
              ? {
                  DisplayName: activitySource.displayName,
                  Host: activitySource.host,
                  Type: activitySource.type,
                  ResourceId: activitySource.resourceId,
                  DataSource:
                    datasourceOptions.length > 0
                      ? datasourceOptions.find(
                          (item) =>
                            item.id === activitySource.targetDataSourceName
                        )
                        ? datasourceOptions.find(
                            (item) =>
                              item.id === activitySource.targetDataSourceName
                          )
                        : datasourceOptions[0]
                      : undefined,
                }
              : {
                  DisplayName: "",
                  Host: "",
                  Type: typeOptions[0].id,
                  ResourceId: "",
                  DataSource:
                    datasourceOptions.length > 0
                      ? datasourceOptions[0]
                      : undefined,
                }
          }
          validationSchema={validationSchema()}
        >
          {({ isSubmitting, values }) => (
            <Form noValidate>
              <VStack align="stretch" spacing={8}>
                {feedback && (
                  <Alert status="error">
                    <AlertIcon />
                    {feedback}
                  </Alert>
                )}
                <FormikInput
                  label="Display name"
                  name={"DisplayName"}
                  type="DisplayName"
                />
                <FormikInput label="Host URl" name={"Host"} type="Host" />
                <FormikSelect
                  label="Type"
                  name={"Type"}
                  type="Type"
                  options={typeOptions.map((item) => ({
                    value: item.id,
                    label: item.id,
                  }))}
                />
                <FormikInput
                  label="Resource Id"
                  name={"ResourceId"}
                  type="ResourceId"
                />
                <FormikSelect
                  label="Target DataSource Name"
                  name={"DataSource"}
                  type="DataSource"
                  options={datasourceOptions.map((item) => ({
                    value: item.id,
                    label:
                      new Date(item.lastCheckin) > getDateDaysAgo(2)
                        ? item.id
                        : `${item.id} (Inactive)`,
                  }))}
                  tooltip={
                    datasourceOptions.length == 0
                      ? "There are currently no datasources to use. Please run an agent configured with this manager url and create one"
                      : "Warning, some datasources are inactive"
                  }
                  warning={datasourceOptions.length == 0}
                  sourceList={datasourceOptions}
                  sourceParam="id"
                />
                <Flex>
                  <Button
                    w="full"
                    leftIcon={<FaArrowRight />}
                    colorScheme="blue"
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    mx={id ? 4 : 0}
                  >
                    {submitText}
                  </Button>
                  {id && (
                    <Button w="full" colorScheme="red" onClick={onOpen} mx={4}>
                      Delete
                    </Button>
                  )}
                </Flex>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
      <DeleteModal
        title={`Delete Activity Source ${id}`}
        body="Are you sure you want to delete this activity source? You will not be able to reverse this"
        isOpen={isOpen}
        onClose={onClose}
        onDelete={onDeleteSource}
      />
    </Container>
  );
};
