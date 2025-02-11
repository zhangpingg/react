import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./router/index.jsx";
import "./base.less";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>,
);
