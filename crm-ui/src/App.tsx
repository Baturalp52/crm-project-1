import React, { Suspense } from "react";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ASideBar from "./layouts/ASideBar";
import HeaderBar from "./layouts/HeaderBar";
import SignIn from "./Pages/SignIn";

import pages from "./pagesIndex";
import Loading from "./components/Loading";
import { Toolbar } from "@mui/material";

import { SWRConfig } from "swr";

import BaseService from "./services/index";

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          BaseService.get(resource).then((res) => res.data),
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<SignIn />} />
        </Routes>
        <Routes>
          {pages.map((item, index) => (
            <Route key={index} path={item.path} element={<ASideBar />} />
          ))}
        </Routes>
        <Routes>
          {pages.map((item, index) => (
            <Route key={index} path={item.path} element={<HeaderBar />} />
          ))}
        </Routes>
        {/* BEGIN :: Page Contents Routes */}
        <Routes>
          {pages.map((item, index) => (
            <Route key={index} path={item.path} element={<Toolbar />} />
          ))}
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
    </SWRConfig>
  );
}

export default App;
