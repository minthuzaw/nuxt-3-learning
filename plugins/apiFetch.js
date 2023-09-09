export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('apiFetch', routeName => `${useRuntimeConfig().public.baseUrl}${routeName}`)
})
