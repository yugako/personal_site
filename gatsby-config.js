module.exports = {
  siteMetadata: {
    title: 'Hasiuk',
    titleTemplate: '%s · Hasiuk',
    description:
        'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    siteUrl: 'https://hasiuk.netlify.app', // No trailing slash allowed!
    url: 'https://hasiuk.netlify.app', // No trailing slash allowed!
    image: '/img/me.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@YHasiuk',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content`,
      },
    },
  ],
};
