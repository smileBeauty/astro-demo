import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://657f18f1201fdd04e468266e--mari-astro-demo.netlify.app/",
  integrations: [react()]
});