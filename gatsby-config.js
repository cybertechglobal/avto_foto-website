const { languages, defaultLanguage } = require("./languages")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const siteUrl = `http://xn--80ae0baavco.xn--p1ai/`

module.exports = {
  pathPrefix: `/websitedemo`,
  siteMetadata: {
    title: `АВТОФОТО`,
    description: `АВТОФОТО - ведущее приложение для фотографий и редактирования на базе искусственного интеллекта для автомобильных дилерских центров`,
    author: `@torlak993`,
    siteUrl: `http://xn--80ae0baavco.xn--p1ai/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `АВТОФОТО`,
        short_name: `АВТОФОТО`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat", // 'font-family' property
              variants: ["300", "400", "500"],
              //subsets: ['latin'],
              //text: 'Hello',
              //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
              //strategy: 'selfHosted' || 'base64' || 'cdn',
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
              //[cssProperty]: 'value',
            },
          ],
         /* selfHosted: [
            {
              family: "MADE Outer Sans Thin",
              urls: {
                // src attributes
                // path relative to gatsby project root
                otf: `/src/assets/fonts/MADE_Outer_Sans_Thin.otf`,
              },
              fontStyle: "thin",
            },
            {
              family: "MADE Outer Sans Light",
              urls: {
                otf: `/src/assets/fonts/MADE_Outer_Sans_Light.otf`,
              },
              fontStyle: "light",
            },
          ],*/
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: `locale`,
        languages,
        defaultLanguage,
        siteUrl: `http://xn--80ae0baavco.xn--p1ai/`,
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          // lowerCaseLng: true,
          // saveMissing: false,
          keySeparator: ".",
          defaultNS: "index",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/404.html"],
        resolveSiteUrl: () => siteUrl,
        query: `
          {
            allSitePage {
              edges {
                node {
                  pageContext
                }
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { edges } }) => {
          return edges
            .filter(
              ({ node }) =>
                !["/404/", "/404.html"].includes(
                  node.pageContext.i18n.originalPath
                )
            )
            .map(({ node: { pageContext } }) => {
              const { languages, originalPath, path, defaultLanguage } =
                pageContext.i18n
              const baseUrl = siteUrl + originalPath
              const links = [{ lang: "x-default", url: baseUrl }]

              languages.forEach(lang => {
                const isDefaultLang = lang === defaultLanguage
                const isDefaultPath = path === originalPath
                const isLangSubDir = path.includes(`${lang}/`)

                if (isDefaultLang && isDefaultPath) return
                if (!isDefaultLang && isLangSubDir) return

                links.push({
                  lang,
                  url: isDefaultLang
                    ? baseUrl
                    : `${siteUrl}/${lang}${originalPath}`,
                })
              })

              return {
                path,
                url: path === "/" ? siteUrl : `${siteUrl}/${path}`,
                changefreq: "daily",
                priority: originalPath === "/" ? 1.0 : 0.7,
                links,
              }
            })
        },
        serialize: page => page,
      },
    },
   /* {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-DZTFYX47BE",
          // Setting this parameter is optional
          anonymize: true,
        },
      },
    },*/
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-DZTFYX47BE", // Google Analytics / GA
    //     ],
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
  ],
}
