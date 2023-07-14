import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Global_state } from "./Component/Context.api.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Global_state>
        <App />
      </Global_state>
    </React.StrictMode>
  </QueryClientProvider>
);
