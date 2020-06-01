import React from 'react';

import * as styles from './Layout.styles';
import SEO from './SEO';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  additionalHead?: React.ReactNode;
  ogImage?: string;
}

const Layout: React.FC<Props> = props => {
  const { title, description, slug, children, additionalHead, ogImage } = props;

  return (
    <React.StrictMode>
      <SEO title={title} description={description} slug={slug} ogImagePath={ogImage}>
        {additionalHead}
      </SEO>
      <header />
      <main className={styles.main}>{children}</main>
      <footer />
    </React.StrictMode>
  );
};

export default Layout;
