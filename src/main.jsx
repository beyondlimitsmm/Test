import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { NavbarProvider } from "./hooks/NavBarContext.jsx";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CsrfProvider } from "./hooks/CsrfContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <CsrfProvider>
      <NavbarProvider>
        <Router>
          <App />
        </Router>
      </NavbarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </CsrfProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
