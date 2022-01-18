import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ASideBar from "./layouts/ASideBar";
import HeaderBar from "./layouts/HeaderBar";

import asidemenu from "./asidemenu";
import Loading from "./components/Loading";

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
        {asidemenu.map((item, index) => (
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
