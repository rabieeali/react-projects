import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap"/dist/css/bootstrap.min.css";
import "./mint.css"
import "./App.css";
import SearchProvider from "./context/SearchProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
