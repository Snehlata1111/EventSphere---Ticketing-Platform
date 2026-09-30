import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(() => {
  const useMockApi = process.env.VITE_USE_MOCK_API === "true";

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: useMockApi ? "http://localhost:3000" : "http://localhost:8080",
          changeOrigin: true,
          ...(useMockApi && {
            rewrite: (requestPath: string) =>
              requestPath.replace(/^\/api\/v1/, "").replace(/\?.*$/, ""),
          }),
        },
      },
    },
  };
});
