import { DarkThemeToggle, ThemeProvider } from "flowbite-react";
import { customTheme } from "./theme";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";

export default function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
