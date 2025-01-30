import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
//import tailwindcss from "tailwindcss";
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    sourcemap: process.env.NODE_ENV !== 'production',
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
