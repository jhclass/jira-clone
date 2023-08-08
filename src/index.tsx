import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Root";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ThemeProvider } from "styled-components";
import { fontSizeTheme, bgTheme } from "./theme";
import { RecoilRoot } from "recoil";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={bgTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
