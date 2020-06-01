/* eslint-disable @typescript-eslint/no-var-requires */
const {
  siteMetadata,
  manifestOptions,
  reactSVGOptions,
  robotsTxtOptions,
  sitemapOptions,
  filesystemContentOptions,
  filesystemImageOptions,
  transformerRemarkOptions,
} = require('./meta/config');

const pageCreatorOptions = { path: `${__dirname}/src/pages`, ignore: [`**/*.styles.ts`] };

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    { resolve: `gatsby-plugin-manifest`, options: manifestOptions },
    { resolve: `gatsby-plugin-page-creator`, options: pageCreatorOptions },
    { resolve: `gatsby-plugin-react-svg`, options: reactSVGOptions },
    { resolve: 'gatsby-plugin-robots-txt', options: robotsTxtOptions },
    { resolve: `gatsby-plugin-sitemap`, options: sitemapOptions },
    { resolve: 'gatsby-source-filesystem', options: filesystemContentOptions },
    { resolve: 'gatsby-source-filesystem', options: filesystemImageOptions },
    { resolve: `gatsby-transformer-remark`, options: transformerRemarkOptions },
  ],
};
