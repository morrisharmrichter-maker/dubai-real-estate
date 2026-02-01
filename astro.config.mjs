import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://dubai.obsidianprivate.capital',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        
        if (item.url.includes('/developers/') || item.url.includes('/projects/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        
        if (item.url.includes('/investment-analysis/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        
        return item;
      }
    })
  ],
  vite: {
    ssr: {
      noExternal: ['chart.js']
    }
  }
});