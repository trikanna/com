import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../utils/style-utils';

import Post from './post';

const Wrapper = styled.div`
  margin-top: 40px;

  ${media.xs`margin-top: 30px;`};
`;

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    data.sort((a, b) => {
      return (
        a.node.childMarkdownRemark.frontmatter.order > b.node.childMarkdownRemark.frontmatter.order
      );
    });

    return (
      <Wrapper>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div style={{ paddingRight: '10%' }}>
              <h2>Tus primeros pasos con React</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus pariatur
                impedit cumque, explicabo, natus consectetur minima delectus, quod ullam voluptas
                molestiae? At est eum illum placeat iusto, reiciendis provident ratione!
              </p>
              <br />
            </div>
          </Col>

          <Col xs={12} sm={12} md={9} lg={9}>
            <Row>
              {data.map((data, index) => {
                if (data.node.sourceInstanceName === 'posts') {
                  return <Post data={data} key={index} />;
                }
              })}
            </Row>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default PostContainer;
