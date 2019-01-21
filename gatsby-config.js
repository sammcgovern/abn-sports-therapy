module.exports = {
  siteMetadata: {
    title: 'ABN Sports Therapy',
    description: 'my theme',
    contact: {
      phone: '07540731115',
      email: 'abnsportstherapy@gmail.com',
    },
    menuLinks: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Treatments',
        link: '/treatments',
      },
      {
        name: 'Prices',
        link: '/prices',
      },
      {
        name: 'Testimonials',
        link: '/testimonials',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    }
  ],
};
