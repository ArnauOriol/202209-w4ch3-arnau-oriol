import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CellPhoneContextProvider from "./contexts/cellphone/CellphoneContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CellPhoneContextProvider>
      <App />
    </CellPhoneContextProvider>
  </React.StrictMode>
);
