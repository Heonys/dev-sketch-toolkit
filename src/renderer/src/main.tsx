import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

createRoot(document.getElementById("app") as HTMLElement).render(<App />);
