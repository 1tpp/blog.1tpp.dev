import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// import vercel from '@astrojs/vercel/serverless';
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.1tpp.dev",
  integrations: [preact()],
  // output: "server", // uncomment this line to use server-side rendering
  output: "static",
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
      domains: ["blog.1tpp.dev"],
    },
  }),
});
