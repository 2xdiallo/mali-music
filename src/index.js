import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ScrollProvider } from "./context/ScrollContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScrollProvider>
    <App />
  </ScrollProvider>
);
