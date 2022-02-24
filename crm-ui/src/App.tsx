import React, { Suspense, useState } from "react";
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
import swrfetcher from "./utils/swrfetcher";
import { pageRedux } from "./redux";
import BaseService from "./services";

function App() {
  const { getState, dispatch, subscribe } = pageRedux;
  const [user, setUser] = useState(getState().user);
  subscribe(() => {
    setUser(getState().user);
  });
  if (!user) {
    if (window.location.pathname !== "/login") {
      BaseService.get("users").then((res) => {
        dispatch({
          type: "CHANGE_USER",
          payload: { user: res.data.user },
        });
      });
    }
  }

  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: swrfetcher,
      }}
    >
      {user && (
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<SignIn />} />
          </Routes>
          <Routes>
            {pages.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<ASideBar user={user} />}
              />
            ))}
          </Routes>
          <Routes>
            {pages.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<HeaderBar user={user} />}
              />
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
      )}
      {!user && <Loading />}
    </SWRConfig>
  );
}

export default App;
