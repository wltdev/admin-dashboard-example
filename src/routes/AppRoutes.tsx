import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../views/Dashboard";
import { Album } from "../views/Album";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/album" element={<Album />} />
    </Routes>
  );
}

export default AppRoutes;
