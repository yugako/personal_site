import * as React from 'react';
import { Header } from '@components/sections/Header';
import { Banner } from '@components/sections/Banner';
import { Works } from '@components/sections/Works';
import { Services } from '@components/sections/Services';
import { About } from '@components/sections/About';
import { Footer } from '@components/sections/Footer';
import { Blog } from '@components/sections/Blog';
import { Link, graphql } from 'gatsby';
import { Layout } from '../layout';

const IndexPage = ({ data, location }) => {
  const { allMarkdownRemark } = data;

  console.log(allMarkdownRemark);
  return (
    <Layout>
      <Header />
      <Banner />
      <Works works={allMarkdownRemark.nodes.filter((item) => item.fileAbsolutePath.split('/').reverse()[1] === 'portfolio')} />
      <Services />
      <About />
      <Blog articles={allMarkdownRemark.nodes.filter((item) => item.fileAbsolutePath.split('/').reverse()[1] === 'blog')} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        html
        fileAbsolutePath
         fields {
            slug
         }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail 
          source
          category
          demo
        }
      }
    }
  }
`;
