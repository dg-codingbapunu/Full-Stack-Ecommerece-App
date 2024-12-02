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
        target: "https://patitapaban-ecommerce.onrender.com", // Backend server
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: true, // If the backend uses HTTPS with an invalid certificate
      },
    },
  },
});
