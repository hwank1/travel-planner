import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api/exchange": {
        target: "https://api.frankfurter.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/exchange/, ""),
      },
    },
  },
});
