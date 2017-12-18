import Link from 'gatsby-link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PostContainer from '../shit/posts/container';
import { media } from '../shit/utils/style-utils';

const Wrapper = styled.div`
  padding-top: 30px;
`;

const PostsTitle = styled.h1`
  margin-bottom: 63px;

  ${media.sm`margin-bottom: 30px;`};
  ${media.xs``};
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
    allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
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
              order
            }
          }
        }
      }
    }
  }
`;
