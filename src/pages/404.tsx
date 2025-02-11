import React from 'react';

import { slugs } from '../../data/config';
import { notFound } from '../../data/strings';
import Layout from '../components/Layout';
import * as styles from './404.styles';

const Home: React.FC = () => (
  <Layout title={notFound.pageTitle} description={notFound.pageDescription} slug={slugs.notFound}>
    <div className={styles.root}></div>
  </Layout>
);

export default Home;
