import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/static"; // or '@astrojs/vercel/serverless' for SSR

// https://astro.build/config
export default defineConfig({
  site: "https://blog.1tpp.dev",
  integrations: [preact()],
  output: "static", // use `server` for SSR
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imagesConfig: {
      sizes: [320, 640, 1280],
      domains: ["blog.1tpp.dev", "docs.astro.build"],
    },
  }),
});
