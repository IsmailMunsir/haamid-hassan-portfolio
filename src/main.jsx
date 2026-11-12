import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/styles.css";
import App from "./App";

// Enables the scroll-reveal styles (content stays visible if JS is off).
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
