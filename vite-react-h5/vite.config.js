import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        cors: true,
        origin: "http://localhost:8080",
        //proxy,
    },
});
