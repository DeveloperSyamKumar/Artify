import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext"; // ✅ import AuthProvider

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ wrap App with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
