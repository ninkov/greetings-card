import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: "/invitation-card",
  plugins: [react()],
  server: {
    headers: {
      // Add relaxed CSP for development
      'Content-Security-Policy': mode === 'development'
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval';"
        : "script-src 'self';", // Strict CSP for production
    },
  },
  build: {
    // Specify output directory for production builds
    outDir: 'dist',
  },
}));
