import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./page/home/Home.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
