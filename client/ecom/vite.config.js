import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Output directory for production build
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Ensure this matches your backend port
        changeOrigin: true, // Needed for CORS and proper headers
        secure: false, // Set false for HTTP (not HTTPS)
      },
    },
  },
});
