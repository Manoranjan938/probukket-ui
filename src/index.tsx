import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./routers/Routers";
import "./styles/global.css";
import "./styles/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
);
