import Link from 'gatsby-link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PostContainer from '../shit/posts/container';

const Wrapper = styled.div`
  padding-top: 50px;
`;

const PostsTitle = styled.h1`
  margin-bottom: 63px;
`;

export default class PostList extends Component {
  constructor(data) {
    super();
  }
  render() {
    const { edges } = this.props.data.allFile;

    return (
      <Wrapper>
        <PostsTitle>Series Recomendadas</PostsTitle>

        <PostContainer data={edges} />
      </Wrapper>
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
            timeToRead
            frontmatter {
              title
              path
              image
            }
          }
        }
      }
    }
  }
`;
