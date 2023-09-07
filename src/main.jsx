import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { NavbarProvider } from "./hooks/NavBarContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarProvider>
      <Router>
        <App />
      </Router>
    </NavbarProvider>
  </React.StrictMode>
);
