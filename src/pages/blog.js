import Link from 'gatsby-link';

import React, { Component } from 'react';

export default class PostList extends Component {
  constructor(data) {
    super();
  }
  render() {
    const { edges } = this.props.data.allFile;

    return (
      <div>
        <h1>Blog posts</h1>
        <br />
        <p>yes, something catchy here</p>
        <br />
        <br />

        <ul>
          {edges.map(post => {
            return (
              <li key={post.node.internal.contentDigest} style={{ padding: '5px 0' }}>
                <Link to={post.node.childMarkdownRemark.frontmatter.path}>
                  {post.node.childMarkdownRemark.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/*<Link to="/">Homepage</Link>*/}
      </div>
    );
  }
}

export const allPosts = graphql`
  query AllBlogPosts {
    allFile {
      edges {
        node {
          id
          sourceInstanceName
          internal {
            contentDigest
          }
          childMarkdownRemark {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  }
`;
