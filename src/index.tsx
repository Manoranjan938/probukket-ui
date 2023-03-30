import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import Routers from "./routers/Routers";
import { store } from "./store";
import "./styles/global.css";
import "./styles/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>,
);
