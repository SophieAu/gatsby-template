import React from 'react';

import { slugs } from '../../data/config';
import { home } from '../../data/strings';
import Layout from '../components/Layout';

const Home: React.FC = () => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}></Layout>
);

export default Home;
