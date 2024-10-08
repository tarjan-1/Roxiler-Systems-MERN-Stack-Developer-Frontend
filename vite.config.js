import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    port: 5500,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
});
