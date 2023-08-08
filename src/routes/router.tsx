import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import About from "../about";
import Home from "../home";
import NotFound from "../NotFound";
import ErrorComponent from "../ErrorComponent";
import TodoList from "../Todo/Todolist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/todo/todolist",
        element: <TodoList />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
