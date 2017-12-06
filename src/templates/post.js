import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Row, Col, Grid } from 'react-flexbox-grid';

const Wrapper = styled.div``;

export default function Template({ data }) {
  const { image, path, serie, title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  console.log('data', data);

  if (serie) {
    console.warn('type.video');
  }

  return (
    <Wrapper className="post-container" style={{ paddingTop: 50 }}>
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <div style={{ paddingRight: '10%' }}>
            <h2>{title}</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus pariatur impedit
              cumque, explicabo, natus consectetur minima delectus, quod ullam voluptas molestiae?
              At est eum illum placeat iusto, reiciendis provident ratione!
            </p>
            <br />
            <br />
          </div>
        </Col>

        <Col xs={12} sm={12} md={9} lg={9}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
      </Row>
    </Wrapper>
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
        serie
      }
    }
  }
`;
