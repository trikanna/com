const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___serie, frontmatter___order], order: ASC }) {
        edges {
          node {
            id
            timeToRead
            html
            internal {
              type
            }
            frontmatter {
              title
              path
              image
              serie
              order
              parent
            }
          }
        }
      }
    }
  `).then(response => {
    if (response.errors) {
      return Promise.reject(response.errors);
    }

    response.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      });
    });
  });
};
