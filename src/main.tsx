import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { IsLightProvider } from "./contexts/isLight.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IsLightProvider>
      <App />
    </IsLightProvider>
  </StrictMode>
);
