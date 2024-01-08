import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://657f18f1201fdd04e468266e--mari-astro-demo.netlify.app/",
  integrations: [react()],
  // prefetch: true,
  prefetch: {
    defaultStrategy: 'hover',
    // prefetchAll: true,
  },
});
