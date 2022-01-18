import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ASideBar from "./Layouts/ASideBar";
import menuItems from "./asidemenu";

function App() {
  return (
    <BrowserRouter>
      {/* BEGIN :: ASideBar Routes */}
      <Routes>
        {menuItems.map((item) => (
          <Route path={item.path} element={<ASideBar />} />
        ))}
        <Route path="settings" element={<ASideBar />} />
        <Route path="hr-members" element={<ASideBar />} />
      </Routes>
      {/* END :: ASideBar Routes */}
    </BrowserRouter>
  );
}

export default App;
