import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'BrewFest 2024',
        short_name: 'BrewFest',
        description: 'Festival de Cervejas Artesanais',
        theme_color: '#3E2723',
        background_color: '#FFF8E1',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
