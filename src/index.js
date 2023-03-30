import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import App1 from "./App1";
import { Fetch } from "./Fetch";
// import Todo from "./Todo";
import Life from "./Life";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <App /> */}
    {/* <App1 /> */}
    {/* <Todo /> */}
    {/* <Life /> */}
    <Fetch />
  </div>
);
