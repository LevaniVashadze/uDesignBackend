import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";

import "./i18n";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
