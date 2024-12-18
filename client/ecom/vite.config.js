import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Ensures the output directory is correctly set
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Corrected the URL
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: false, // If the backend uses HTTPS with an invalid certificate
      },
    },
  },
});
