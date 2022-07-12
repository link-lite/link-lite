import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { Account } from "./Account";
import { NotFound } from "pages/error/NotFound";
import { ProtectedRoutes } from "layouts/ProtectedRoutes";
import { UserHome } from "pages/UserHome";
import { useUser } from "contexts/User";
import { useEffect } from "react";
import { ContentPage } from "pages/ContentPage";
import { useBackendConfig } from "contexts/Config";
import CreateActivitySource from "pages/ActivitySource/create";
import EditActivitySource from "pages/ActivitySource/edit";
import { DataSourcesList } from "pages/DataSource/list";
import { ResultsModifiersList } from "pages/ResultsModifier/list";

const IndexRedirect = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const targetPath = user ? "/home" : "/about";
    navigate(targetPath, { replace: true });
  }, [user]);

  return null;
};

export const Root = () => {
  const { config } = useBackendConfig(); // TODO use for feature flagging routes
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<IndexRedirect />} />

        <Route path="about" element={<ContentPage contentKey={"about"} />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="home" element={<UserHome />} />
          <Route
            path="activitysources/new"
            element={<CreateActivitySource />}
          />
          <Route path="datasources" element={<DataSourcesList />} />
          <Route path="resultsmodifiers" element={<ResultsModifiersList />} />
          <Route path="activitysources/:id" element={<EditActivitySource />} />
        </Route>

        <Route path="account/*" element={<Account />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
