import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopDataContextProvider from "./components/Config/ShopDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopDataContextProvider>
        <App />
      </ShopDataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
