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
    console.log(value);
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const collectionType = node.fileAbsolutePath.split('/').reverse()[1];

    if (collectionType === 'portfolio') {
      createPage({
        path: `portfolio${node.fields.slug}`,
        component: portfolioTemplate,
        context: {
        // additional data can be passed via context
          slug: node.fields.slug,
        },
      });
    } else {
      createPage({
        path: `blog${node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.fields.slug,
        },
      });
    }
  });
};
