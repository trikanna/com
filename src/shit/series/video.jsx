import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../utils/style-utils';

const Wrapper = styled.div`
  margin-bottom: 20px;
  min-height: 250px;
`;

const Caption = styled.div`
  background: #333;
  color: white;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  position: relative;

  background-image: -webkit-linear-gradient(20deg, rgb(255, 59, 48) 0%, rgb(255, 45, 85) 100%);
  background-image: -moz-linear-gradient(20deg, rgb(255, 59, 48) 0%, rgb(255, 45, 85) 100%);
  background-image: linear-gradient(20deg, rgb(255, 59, 48) 0%, rgb(255, 45, 85) 100%);
`;

const Duration = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  color: white;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 1px 3px;
  font-size: 11px;
  font-weight: 600;
`;

const Title = styled.h4`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 5px;
  // line-height: 17px;
  width: 90%;
  min-height: 44px;
  color: #222;

  ${media.xs`font-size: 17px; line-height: 19px;`};
`;

const Description = styled.p`
  padding: 5px;
  width: 90%;
  font-size: 11px;
  font-weight: 600;
  color: #aaa;
`;

class SeriesVideo extends Component {
  render() {
    const { title } = this.props;

    return (
      <Wrapper>
        <Caption>
          <Duration>5:00</Duration>
        </Caption>
        <Title>{title}</Title>
        <Description>10/09/17</Description>
      </Wrapper>
    );
  }
}

SeriesVideo.propTypes = {
  title: PropTypes.string.isRequired
};

export default SeriesVideo;
