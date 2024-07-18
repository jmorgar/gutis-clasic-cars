import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercel(),
  vite: {
    build: {
      rollupOptions: {
        input: {
          main: "src/main.js",
          images: "src/img",
        },
      },
    },
  },
});
