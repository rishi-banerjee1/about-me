import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rishi-banerjee1.github.io",
  base: "/about-me",
  integrations: [sitemap()]
});
