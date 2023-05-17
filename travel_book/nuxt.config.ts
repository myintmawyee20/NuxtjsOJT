// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt 3 OJT',
            link: [
                {
                    rel: 'stylesheet' , href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    }
})
