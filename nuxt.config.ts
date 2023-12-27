// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css:['bootstrap/dist/css/bootstrap.css'],
  spaLoadingTemplate:"./spa-loading-template.html",
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})
