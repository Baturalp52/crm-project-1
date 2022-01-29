import React, { Suspense } from "react";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ASideBar from "./layouts/ASideBar";
import HeaderBar from "./layouts/HeaderBar";

import pages from "./pagesIndex";
import Loading from "./components/Loading";
import { Toolbar } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ASideBar />} />
      </Routes>
      <Routes>
        <Route path="*" element={<HeaderBar />} />
      </Routes>
      {/* BEGIN :: Page Contents Routes */}
      <Routes>
        <Route path="*" element={<Toolbar />} />
      </Routes>
      <Routes>
        {pages.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={
              <Suspense fallback={<Loading />}>{<item.page />}</Suspense>
            }
          />
        ))}
      </Routes>

      {/* END :: Page Contents Routes */}
    </BrowserRouter>
  );
}

export default App;
