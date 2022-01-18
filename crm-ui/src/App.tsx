import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ASideBar from "./layouts/ASideBar";
import menuItems from "./asidemenu";
import HeaderBar from "./layouts/HeaderBar";

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
        <Route path="profile" element={<ASideBar />} />
      </Routes>
      {/* END :: ASideBar Routes */}
      {/* BEGIN :: HeaderBar Routes */}
      <Routes>
        {menuItems.map((item) => (
          <Route path={item.path} element={<HeaderBar />} />
        ))}
        <Route path="settings" element={<HeaderBar />} />
        <Route path="hr-members" element={<HeaderBar />} />
        <Route path="profile" element={<HeaderBar />} />
      </Routes>
      {/* END :: HeaderBar Routes */}
    </BrowserRouter>
  );
}

export default App;
