import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
    site: 'https://coffeeroasters.rorem.dev',
    base: '/Coffeeroasters-website',
    integrations: [tailwind(), vue(), sitemap()]
})