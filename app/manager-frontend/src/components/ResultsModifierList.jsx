import {
  Heading,
  VStack,
  Link,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

import { useDataSourceList } from "api/datasource";
import { DataSourceSummary } from "./DataSourceSummary";
import { useState } from "react";
import { useBackendApi } from "../contexts/BackendApi";
import { DeleteModal } from "./DeleteModal";
import { ConfigureResultsModifierModal } from "./ConfigureResultsModifierModal";

function ResultsModifierList() {
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const [selected, setSelected] = useState();
  const { resultsmodifier } = useBackendApi();
  const { data, mutate } = useDataSourceList();

  const onDelete = async () => {
    await resultsmodifier.delete({ id: selected.id });
    await mutate();
    onDeleteClose();
  };
  const onClickDelete = (item) => {
    setSelected(item);
    onDeleteOpen();
  };
  const closeDelete = () => {
    onDeleteClose();
    setSelected(undefined);
  };
  const closeUpdate = () => {
    onUpdateClose();
    setSelected(undefined);
  };
  const onClickUpdate = (item) => {
    setSelected(item);
    onUpdateOpen();
  };

  return (
    <VStack align="stretch" px={8} w="100%" spacing={4} p={4}>
      <VStack w="100%" align="stretch">
        <Heading as="h3" size="lg">
          Results modifiers
        </Heading>
        <Button onClick={onUpdateOpen}>Add</Button>
        {data &&
          data.map((item, index) => (
            <DataSourceSummary
              key={index}
              href={`/resultsmodifier/${item.id}`}
              onDelete={() => onClickDelete(item)}
              onUpdate={() => onClickUpdate(item)}
            ></DataSourceSummary>
          ))}
      </VStack>
      <DeleteModal
        title={`Delete Results Modifier ${selected ? selected.id : ""}`}
        body="Are you sure you want to delete this results modifier? You will not be able to reverse this"
        isOpen={isDeleteOpen}
        onClose={closeDelete}
        id={selected ? selected.id : undefined}
        onDelete={onDelete}
      />
      <ConfigureResultsModifierModal
        isOpen={isUpdateOpen}
        onClose={closeUpdate}
        action={selected ? resultsmodifier.update : resultsmodifier.create}
        initialData={selected}
      />
    </VStack>
  );
}

export default ResultsModifierList;
