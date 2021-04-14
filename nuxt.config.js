export default {
  // Настройки для локального доступа к проекту с мобильного (cmd ---> ipconfig)
  server: {
    port: 3030, // default: 3000
    host: 'localhost' // default: localhost, custom : 192.168.1.222 -> current ip
  },

  telemetry: false,

  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3031'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'fit-and-health',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#6EB63B' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/reset.scss',
    '@/static/fonts/css/themify-icons.css',
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },

  sitemap: {
    // options
    // hostname: 'https://fit-and-health.ru',
    gzip: true,
    exclude: [
      '/_icons',
      // '/secret',
      // '/admin/**'
    ],
    // routes: async () => {
    //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    //   return data.map((user) => `/users/${user.username}`)
    // }
  },

  svgSprite: {
    // manipulate module options
    input: '~/assets/sprite/svg', // Directory of original svg files
    output: '~/assets/sprite/gen' // Directory to store generated sprites
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Server Middleware
  */
  // serverMiddleware: {
  //   '/api': '~/api'
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
