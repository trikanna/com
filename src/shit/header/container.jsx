import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Navigation from './navigation';
import { media } from '../utils/style-utils';

const Wrapper = styled.div`
  background: #fff;
  color: #333;
  height: 100px;
  padding: 50px 30px 0 30px;
  position: relative;
  border-bottom: 1px solid #f2f2f2;

  ${media.giant`padding: 50px 15px 0 15px;`};
  ${media.desktop``};
  ${media.tablet``};
  ${media.phone`padding-top: 14px; height: 50px;`};

  a {
    text-decoration: none;
    color: #333;

    &:visited,
    &:active {
      color: #333;
    }
  }

  strong {
    font-weight: 700;
    letter-spacing: initial;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <strong>Santiago Camelo</strong>
        </Link>
        <Navigation />
      </Wrapper>
    );
  }
}

export default Header;
