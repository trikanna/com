import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SeriesVideo from './video';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../utils/style-utils';

const SeriesTitle = styled.h1`
  margin-bottom: 30px;
`;

const SeriesPopular = styled.h4`
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  margin-top: 50px;

  ${media.phone`margin-top: 30px;`};
`;

const ActionsPanel = styled.div`
  text-align: right;
  margin-bottom: 20px;
  margin-top: 5px;

  ${media.phone`text-align: left;`};

  button {
    margin: 0 0 0 20px;

    ${media.phone`margin: 0 20px 0 0; font-size: 14px; font-weight: 500;`};
  }
`;

class SeriesContainer extends Component {
  render() {
    const { title } = this.props;

    return (
      <Wrapper>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={8} md={8} sm={8} xs={12}>
                <SeriesTitle>{title}</SeriesTitle>
              </Col>
              <Col lg={4} md={4} sm={4} xs={12}>
                <ActionsPanel>
                  <button>view intro</button>
                  <button>share</button>
                </ActionsPanel>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <SeriesPopular>Videos en la Serie</SeriesPopular>
              </Col>
            </Row>

            <Row>
              <Col lg={3} md={3} sm={3} xs={12}>
                <SeriesVideo title="Turn a JSON string Into Typed Data in Elm" />
              </Col>
              <Col lg={3} md={3} sm={3} xs={12}>
                <SeriesVideo title="Use the URL as the source of truth in React" />
              </Col>
              <Col lg={3} md={3} sm={3} xs={12}>
                <SeriesVideo title="Leverage New Features of React 16" />
              </Col>
              <Col lg={3} md={3} sm={3} xs={12}>
                <SeriesVideo title="Getting Started with Redux" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

SeriesContainer.propTypes = {
  title: PropTypes.string.isRequired
};

export default SeriesContainer;
