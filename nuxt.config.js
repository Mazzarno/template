export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ASUS',
        htmlAttrs: {
            lang: 'fr',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "Découvrez le Vivobook 13 Slate OLED, ce fantastique compagnon portable 2 en 1 qui vous permet d’apprécier plus facilement tout ce que vous aimez, où que vous soyez. Que ce soit pour étudier ou travailler, vous détendre ou discuter, à la verticale ou à l'horizontale, le Vivobook 13 Slate OLED s'adapte à toutes vos envies pour que vous puissiez travailler ou jouer à votre guise !" },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'language', name: 'language', content: "French" },
            { hid: 'revisit-after', name: 'revisit-after', content: "1 days" },
            { name: 'format-detection', content: 'telephone=no' },
            // Open Graph / Facebook
            { hid: 'og:type', property: 'og:type', content: "website" },
            { hid: 'og:url', property: 'og:url', content: "https://asus.mazzar.fr/" },
            { hid: 'og:title', property: 'og:title', content: "ASUS Vivobook 13 Slate OLED (T3300)" },
            { hid: 'og:description', property: 'og:description', content: "Découvrez le Vivobook 13 Slate OLED, ce fantastique compagnon portable 2 en 1 qui vous permet d’apprécier plus facilement tout ce que vous aimez, où que vous soyez. Que ce soit pour étudier ou travailler, vous détendre ou discuter, à la verticale ou à l'horizontale, le Vivobook 13 Slate OLED s'adapte à toutes vos envies pour que vous puissiez travailler ou jouer à votre guise !" },
            // Twitter
            { hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image" },
            { hid: 'twitter:url', property: 'twitter:url', content: "https://asus.mazzar.fr/" },
            { hid: 'twitter:title', property: 'twitter:title', content: "ASUS Vivobook 13 Slate OLED (T3300)" },
            { hid: 'twitter:description', property: 'twitter:description', content: "Découvrez le Vivobook 13 Slate OLED, ce fantastique compagnon portable 2 en 1 qui vous permet d’apprécier plus facilement tout ce que vous aimez, où que vous soyez. Que ce soit pour étudier ou travailler, vous détendre ou discuter, à la verticale ou à l'horizontale, le Vivobook 13 Slate OLED s'adapte à toutes vos envies pour que vous puissiez travailler ou jouer à votre guise !" },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/asus_ico.png' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/styles.css', ],

    //loading: '~/components/loading.vue',

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vuesax', { src: '~/plugins/asus.js', mode: 'client' }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['nuxt-compress', '@nuxtjs/vuetify'],
    vuetify: {
        optionsPath: './vuetify.js',
        theme: { dark: true },
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nuxtjs-mdi-font', ['nuxt-compress',
            {
                gzip: {
                    threshold: 8192,
                },
                brotli: {
                    threshold: 8192,
                },
            },
        ]
    ],
    generate: {
        dir: 'htdocs',
        fallback: '404.html',
        routes: ['/', '/exo1', '/exo2'],
        subFolders: false,
        crawler: false,
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    robots: {
        UserAgent: '*',
        Allow: '/',
        UserAgent: 'Googlebot',
        Allow: '/',
        Sitemap: 'https://www./sitemap.xml'
    },
    sitemap: {
        hostname: 'https://asus.mazzar.fr/',
        Default: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        },
        routes: [{
            url: 'https://asus.mazzar.fr/',
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }, ]
    },
}