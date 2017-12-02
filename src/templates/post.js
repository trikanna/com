import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: red;
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div className="post-container" style={{ paddingTop: 60 }}>
      <h1>{post.frontmatter.title}</h1>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }
  }
`;
