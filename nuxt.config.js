module.exports = {
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  /*

  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'frontend' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.css' },
    ]
  },
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.js' },
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
};
