// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/ui','@nuxt/image','@nuxt/content'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s\t|\tMatteo Secco',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        {name: 'author', content: 'Matteo Secco'},
      ]
    },
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
        'neutral'
      ],
    },
  },
  content: {
    build: {
      csv: {
        json: true,
        delimiter: ','
      }
    }
  },
  typescript: {
    tsConfig: {
      include: ['../types/**/*.d.ts']
    }
  }
})
