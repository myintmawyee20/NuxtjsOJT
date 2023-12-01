// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css'
    ],
    
    app: {
        head: {
            title: 'Post SPA',
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                {
                    rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    }
})
