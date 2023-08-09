import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Main from "./Main";
import Header from "./Header";

function Root() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
