import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    port: 4000,
  },
  preview: {
    port: 4001,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendors: ["react", "react-dom"],
        },
      },
    },
  },
});
