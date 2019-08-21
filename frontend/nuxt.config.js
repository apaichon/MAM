
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Thai Stringers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS*/
  css: [
    '~/assets/meterial-style.scss',
    '~/assets/thaistring-style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-material',
    '~/plugins/global-component',
    '~/plugins/vue-date-fns',
    '~/components/SidebarPlugin/sidebar'
  ],
  /* 
  ** Router
  */
  router: {
    linkActiveClass: 'active',
    routes: [
      {
        path: "/",
        component: 'layout/DashboardLayout.vue',
        children: [
          {
            path: "addnews",
            name: "Add News",
            component: 'pages/AddNews.vue'
          },
          {
            path: "newslists",
            name: "News Lists",
            component: 'pages/AddNews.vue'
          },
          {
            path: "dashboard",
            name: "Dashboard",
            component: 'pages/Dashboard.vue'
          },
        ]
      }
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseUrl: 'http://localhost:3001/api/execute'
  }
}
