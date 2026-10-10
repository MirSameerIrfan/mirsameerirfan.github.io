// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mirsameerirfan.github.io",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/projects": "/work",
    "/blog/first-post": "/blog/demystifying-dynamic-programming",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  markdown: {
    shikiConfig: {
      theme: "vesper",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
