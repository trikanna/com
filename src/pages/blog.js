import Link from 'gatsby-link';
import React, { Component } from 'react';
import styled from 'styled-components';
import PostContainer from '../shit/posts/container';
import { media } from '../shit/utils/style-utils';

const Wrapper = styled.div`
  padding-top: 50px;

  ${media.sm`padding-top: 30px;`};
  ${media.xs`padding-top: 30px;`};
`;

const PostsTitle = styled.h1`
  margin-bottom: 63px;

  ${media.sm`margin-bottom: 43px;`};
  ${media.xs`margin-bottom: 43px;`};
`;

export default class PostList extends Component {
  constructor(data) {
    super();
  }
  render() {
    const { edges } = this.props.data.allFile;

    console.log('edges', edges);

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
            }
          }
        }
      }
    }
  }
`;
