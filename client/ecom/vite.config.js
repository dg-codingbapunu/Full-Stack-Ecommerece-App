import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Backend server
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: true, // If using HTTPS without a valid certificate
      },
    },
  },
});
