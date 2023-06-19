import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Global_state } from "./Component/Context.api.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global_state>
      <App />
    </Global_state>
  </React.StrictMode>
);
