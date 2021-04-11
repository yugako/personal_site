import * as React from 'react';
import { Header } from '@components/sections/Header';
import { Banner } from '@components/sections/Banner';
import { Works } from '@components/sections/Works';
import { Services } from '@components/sections/Services';
import { About } from '@components/sections/About';
import { Footer } from '@components/sections/Footer';
import { Blog } from '@components/sections/Blog';
import { Layout } from '../layout';

const IndexPage = () => (
  <Layout>
    <Header />
    <Banner />
    <Works />
    <Services />
    <About />
    <Blog />
    <Footer />
  </Layout>
);

export default IndexPage;
