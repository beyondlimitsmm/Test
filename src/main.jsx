import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { NavbarProvider } from "./hooks/NavBarContext.jsx";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CsrfProvider } from "./hooks/CsrfContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Router>
      <CsrfProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </CsrfProvider>
    </Router>
  </QueryClientProvider>
  // </React.StrictMode>
);
