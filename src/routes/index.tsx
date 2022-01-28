/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";

import AppLayout from "../components/AppLayout";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

function AppWrapper() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

type Props = {
  userToken: string;
};

function Routes({ userToken }: Props) {
  return <>{userToken ? <AppWrapper /> : <AuthRoutes />}</>;
}

export default Routes;
