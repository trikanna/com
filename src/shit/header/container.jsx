import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Navigation from './navigation';
import { media } from '../utils/style-utils';
import { Row, Col, Grid } from 'react-flexbox-grid';

const Wrapper = styled.div`
  background: #fff;
  color: #333;
  height: 100px;
  padding: 50px 20px 0 20px;
  position: relative;
  border-bottom: 1px solid #ddd;

  opacity: 0.98;

  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;

  top: 0;
  z-index: 1000;

  ${media.xl`padding: 50px 20px 0 20px;`};
  ${media.lg``};
  ${media.md`padding: 18px 0px 0 0px; height: 60px;`};
  ${media.sm`padding: 18px 0px 0 0px; height: 60px;`};
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
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Link to="/">
                <strong>Santiago Camelo</strong>
              </Link>
              <Navigation />
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default Header;
