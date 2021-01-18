import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "reactjs-popup/dist/index.css";
import App from "./app/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ECEDED",
    secoundary: "#FFFFFF",
    third: "#3A6585",
    fourth: "#2F373E",
    fifth: "#D8D8D8",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
