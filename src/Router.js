import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DatasetModal from "./pages/DatasetEditForm/DatasetModal/DatasetModal";
import ScheduleFullComp from "./pages/ScheduleFullComp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScheduleFullComp />}></Route>
        <Route path="/studio" element={<DatasetModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
