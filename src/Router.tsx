import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Temp } from "./pages/temp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
