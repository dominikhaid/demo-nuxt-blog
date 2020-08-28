export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  //mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  //target: "server",
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/components", "~/plugins/ui"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "znDUX119Pt7KYMaYeVQZsgtt",
        cacheProvider: "memory"
      }
    ],
    "nuxt-buefy"
  ],
  router: {
    base: "/app/nuxt-blog",
    middleware: ["languageDetection", "topSlider"]
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // analyze: {
    //   analyzerMode: "static"
    // },
    // srcDir: "/static",
    extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        maxSize: 256000
      }
    },
    publicPath: "/static"
  }
};
