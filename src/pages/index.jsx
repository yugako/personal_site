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
      <Works />
      <Services />
      <About />
      <Blog articles={allMarkdownRemark.nodes.filter(item => item.frontmatter.posttype === 'article')} />
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
        
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
          posttype
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
