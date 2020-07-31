/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */

const hiddenPages = ['/404'];

exports.siteMetadata = {
  title: `Gatsby Template`,
  description: `A Gatsby Base Template.`,
  author: `Sophie Au`,
  siteUrl: `https://www.gatsbyjs.org`,
};

exports.manifestOptions = {
  name: `gatsby-template`,
  short_name: `gatsby-templ`,
  start_url: `/`,
  background_color: `#FFFFFF`,
  theme_color: `#FFFFFF`,
  display: `minimal-ui`,
  icon: `favicon.png`, // This path is relative to the root of the site.
};

exports.reactSVGOptions = { rule: { include: /\.inline\.svg$/ } };

exports.robotsTxtOptions = {
  policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }],
};

exports.sitemapOptions = { exclude: hiddenPages };

exports.filesystemContentOptions = { name: 'content', path: `${__dirname}/../data/content/` };
exports.filesystemImageOptions = { name: 'img', path: `${__dirname}/../data/img/` };

exports.transformerRemarkOptions = {
  plugins: [
    {
      resolve: 'gatsby-remark-images',
      options: { maxWidth: 970, quality: 90, withWebp: true },
    },
  ],
};
