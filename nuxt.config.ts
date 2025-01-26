// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  css: ['remixicon/fonts/remixicon.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  experimental: {
    /**
     * see: https://v3.nuxtjs.org/api/configuration/nuxt.config#inlinessrstyles
     */
    inlineSSRStyles: false
  },
})
