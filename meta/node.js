/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);

exports.PAGES_QUERY = `
  {
    posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/posts/"}}) {
      edges {
        node {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;

exports.buildBlogPosts = (nodes, createPage) => {
  const component = resolve(`./src/templates/post.tsx`);

  nodes.forEach(({ node }) => {
    createPage({ path: `blog/${node.frontmatter.slug}`, component, context: { id: node.id } });

    console.log(node.frontmatter.slug);
  });
};
