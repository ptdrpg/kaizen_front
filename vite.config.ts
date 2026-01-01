import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { SERVER_SIDE_BASE_URL } from "./app/utils/app-constants";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    proxy: {
      '/api/v1': {
        target: SERVER_SIDE_BASE_URL,
        changeOrigin: true,
      }
    }
  }
});
