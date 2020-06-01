import { graphql } from 'gatsby';
import React from 'react';

import { buildPageTitle } from '../../data/strings';
import Layout from '../components/Layout';
import * as styles from './post.styles';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
      html
    }
  }
`;

interface Props {
  data: {
    markdownRemark: {
      frontmatter: { title: string; slug: string };
      html: string;
    };
  };
}

const Post: React.FC<Props> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, slug } = frontmatter;

  return (
    <Layout title={buildPageTitle(title)} description={''} slug={slug}>
      <article className={styles.root}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default Post;
