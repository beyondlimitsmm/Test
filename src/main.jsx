import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { NavbarProvider } from "./hooks/NavBarContext.jsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <NavbarProvider>
      <Router>
        <App />
      </Router>
    </NavbarProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
