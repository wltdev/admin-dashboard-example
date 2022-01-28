import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../views/Login";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default AuthRoutes;
