import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../utils/style-utils';

import Post from './post';

const Wrapper = styled.div`
  margin-top: 50px;

  ${media.phone`margin-top: 30px;`};
`;

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    console.log('data', data);

    return (
      <Wrapper>
        <Row>
          {data.map((data, index) => {
            return <Post data={data} key={index} />;
          })}
        </Row>
      </Wrapper>
    );
  }
}

export default PostContainer;
