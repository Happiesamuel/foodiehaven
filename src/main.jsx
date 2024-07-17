import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorSuspense from "./ui/ErrorSuspense.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorSuspense}
      onReset={() => window.location.replace("/")}
    ></ErrorBoundary>

    <App />
  </React.StrictMode>
);
