import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/pages/App.tsx";
import "./index.css";
import { ProjectProvider } from "./provider/ProjectCtx.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>
);
