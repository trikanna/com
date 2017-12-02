import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Navigation from './navigation';
import { media } from '../utils/style-utils';

const Wrapper = styled.div`
  background: #fff;
  color: #333;
  height: 100px;
  padding: 50px 20px 0 20px;
  position: relative;
  border-bottom: 1px solid #f2f2f2;

  ${media.xl`padding: 50px 20px 0 20px;`};
  ${media.lg``};
  ${media.md``};
  ${media.sm``};
  ${media.xs`padding-top: 14px; height: 50px;`};

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
