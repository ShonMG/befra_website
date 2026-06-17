import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// 💡 Fallback options so it runs cleanly without needing complex environment setups
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      // ⚠️ Note: If attached_assets folder is missing, you may need to update asset imports in your code
      "@assets": path.resolve(import.meta.dirname, "attached_assets"), 
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
  },
});
