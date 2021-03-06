module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - George Hasiuk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'If you want blog, site for your company or even some, then you`re in the right place. ' },
      { hid: 'keywords', name: 'keywords', content: 'Юрій Гасюк, сайти, spa, pwa, js, html, css, wordpress, создание сайтов, web development' },
      { hid: 'robots', name: 'robots', content: 'index,follow,noodp' },
      { hid: 'googlebot', name: 'googlebot', content: 'index,follow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:400,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap' },
    ]
  },

  /*
  * Modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  
  ],
  markdownit: {
    injected: true,
  },
  styleResources: {
      scss: [
          '@/assets/scss/global.scss',
      ]

  },
  googleAnalytics: {
    id: 'UA-136388096-2'
  },
  oneSignal: {
  init: {
    appId: '9589f68a-9130-4cb5-8ca5-cd90f009360a',
    allowLocalhostAsSecureOrigin: true,
    welcomeNotification: {
        disable: false
    }
  },
  cdn: true
},
  pwa: {
    manifest: {
      name: 'Y.H.L',
      author: 'George Hasiuk',
    },
  },
  sitemap: {
    hostname: 'https://hasiuk.netlify.com',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
  //  routes: function() {
  //     const fs = require('fs');
  //     return fs.readdirSync('./assets/content/blog').map(file => {
  //       return {
  //         route: `/blog/${file.slice(0, -5)}`, // Remove the .json from the end of the filename
  //         payload: require(`./assets/content/blog/${file}`),
  //       };
  //     });
  //   },
  },


  /*
  * Plugins
  */
  plugins: [
    '~plugins/vue-typed',
    '~plugins/vue-transition',
    '~plugins/disqus',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#018aac',
  },

  /*
  ** Generate configuration
  */
  // generate: {
  //   routes: function() {
  //     const fs = require('fs');
  //     return fs.readdirSync('./assets/content/blog').map(file => {
  //       return {
  //         route: `/blog/${file.slice(0, -5)}`, // Remove the .json from the end of the filename
  //         payload: require(`./assets/content/blog/${file}`),
  //       };
  //     });
  //   },
  // },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

