import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}
const root = createRoot(container);


root.render(
  <StrictMode>
    <ThemeInit />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

initThemeMode();
