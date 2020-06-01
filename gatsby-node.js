/* eslint-disable @typescript-eslint/no-var-requires */
const { PAGES_QUERY, buildBlogPosts } = require('./meta/node');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) return;

  console.log('\nCreating Blog Posts...');
  buildBlogPosts(result.data.posts.edges, actions.createPage);

  console.log();
};
