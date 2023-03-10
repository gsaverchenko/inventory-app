// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: { shim: false },
    css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    modules: [
        '@pinia/nuxt',
    ]
})