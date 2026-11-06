import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// `base` controls the public path when deployed.
// - Custom domain or <user>.github.io repo -> "/"
// - Project page (https://<user>.github.io/<repo>/) -> "/<repo>/"
// Set it through the BASE_PATH env var in CI; defaults to "/".
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Split large vendor deps so the initial route stays light.
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          markdown: ["react-markdown", "remark-gfm", "rehype-raw", "rehype-slug"],
        },
      },
    },
  },
});
