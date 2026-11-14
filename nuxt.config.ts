// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      },
      title: 'iGenius Singapore | Microsoft, Cloud and Hosting Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        { name: 'description', content: 'iGenius Singapore: Microsoft authorized partner for Office 365, Azure and Dynamics 365, with domains, web hosting, cloud and 24x7 support.' },
        { name: 'theme-color', content: '#0b1f3a' }
      ]
    }
  }
});
