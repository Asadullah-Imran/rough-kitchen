import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set base to the repository name for GitHub Pages
  // Repo: Asadullah-Imran/rough_kitchen
  base: "/rough_kitchen/",
});
