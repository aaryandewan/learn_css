import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ArgonRegister from "./ArgonRegister";
import "./assets/css/argon-dashboard-react.css";
import Chart from "./chart";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ArgonRegister /> */}
    <Chart />
  </React.StrictMode>,
  document.getElementById("root")
);
