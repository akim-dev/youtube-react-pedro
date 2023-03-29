import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import App1 from "./App1";
import Todo from "./Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    <Todo />
  </React.StrictMode>
);
