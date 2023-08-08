import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
