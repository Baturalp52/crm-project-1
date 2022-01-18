import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ASideBar from "./layouts/ASideBar";
import HeaderBar from "./layouts/HeaderBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ASideBar />} />
        <Route path="*" element={<HeaderBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
