
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
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-material',
    '~/plugins/global-component'
  ],
  /* 
  ** Router
  */
  router: [
    // { path: '/', component: import('~/pages/index.vue')}, 
    // { path: '/dashboard', component: import('~/pages/Dashboard.vue')}, 
    {
      path: "/",
      component: import('../pages/index.vue'),
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: import('../pages/Dashboard.vue')
        },
        // {
        //   path: "user",
        //   name: "User Profile",
        //   component: UserProfile
        // },
        // {
        //   path: "table",
        //   name: "Table List",
        //   component: TableList
        // },
        // {
        //   path: "typography",
        //   name: "Typography",
        //   component: Typography
        // },
        // {
        //   path: "icons",
        //   name: "Icons",
        //   component: Icons
        // },
        // {
        //   path: "maps",
        //   name: "Maps",
        //   meta: {
        //     hideFooter: true
        //   },
        //   component: Maps
        // },
        // {
        //   path: "notifications",
        //   name: "Notifications",
        //   component: Notifications
        // },
        // {
        //   path: "upgrade",
        //   name: "Upgrade to PRO",
        //   component: UpgradeToPRO
        // }
      ]
    }
  ],
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
