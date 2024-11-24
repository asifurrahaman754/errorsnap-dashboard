import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

declare const __dirname: string;

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      utils: path.resolve(__dirname, "src/utils"),
      components: path.resolve(__dirname, "src/components"),
      core_components: path.resolve(__dirname, "src/core_components"),
      icons: path.resolve(__dirname, "src/icons"),
      hooks: path.resolve(__dirname, "src/hooks"),
      store: path.resolve(__dirname, "src/store"),
      layouts: path.resolve(__dirname, "src/layouts"),
      routes: path.resolve(__dirname, "src/routes"),
      test_utils: path.resolve(__dirname, "src/test_utils"),
      theme: path.resolve(__dirname, "src/theme"),
      pages: path.resolve(__dirname, "src/pages"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
});
