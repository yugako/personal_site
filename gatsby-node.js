const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layout': path.resolve(__dirname, 'src/layout'),
      },
    },
  });
};

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve('./src/templates/blogTemplate.js');
  const portfolioTemplate = require.resolve('./src/templates/portfolioTemplate.jsx');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const { edges } = result.data.allMarkdownRemark;

  if (edges) {
    edges.forEach(({ node }) => {
      const collectionType = node.fileAbsolutePath.split('/').reverse()[1];

      if (collectionType && collectionType === 'portfolio') {
        createPage({
          path: `portfolio${node.fields.slug}`,
          component: portfolioTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      }
      if (collectionType && collectionType === 'blog') {
        createPage({
          path: `blog${node.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      }
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
      fileAbsolutePath: String
    }

    type Frontmatter {
      title: String
      thumbnail: String
      description: String
      date: Date @dateformat
      source: String
      excerpt: String
      content: String
      client: String
      duration: String
      role: String
    }

    type Fields {
      slug: String
    }
  `);
};
