import Link from 'gatsby-link';
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import SeriesContainer from '../shit/series/container';
import { media } from '../shit/utils/style-utils';
import * as _ from 'lodash';
import SeriesVideo from '../shit/series/video';

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

export default class SeriesList extends Component {
  constructor(data) {
    super();

    this.renderGroups = this.renderGroups.bind(this);
  }

  renderGroups() {
    const { edges: series } = this.props.data.allFile;
    const sections = [];

    const group = _.groupBy(series, 'node.childMarkdownRemark.frontmatter.serie');

    for (const key in group) {
      sections.push(key);
    }

    return (
      <div>
        {sections.map((section, index) => {
          return (
            <div key={index}>
              <SeriesContainer title={section} />

              <Row>
                {group[section].map((group, index) => {
                  const { title, path, serie, order } = group.node.childMarkdownRemark.frontmatter;
                  return (
                    <Col key={index} lg={3} md={3} sm={3} xs={12}>
                      <SeriesVideo title={title} path={path} serie={serie} order={order} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return <div>{this.renderGroups()}</div>;
  }
}

export const allVideoSeries = graphql`
  query AllVideoSeries {
    allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
      edges {
        node {
          id
          internal {
            contentDigest
          }
          childMarkdownRemark {
            timeToRead
            frontmatter {
              title
              path
              image
              serie
              order
            }
          }
        }
      }
    }
  }
`;

/*

export default () => (
  <div>
    <SeriesContainer title="De Cero a Tero con React" />
    <SeriesContainer title="Introducción a Redux" />
    <SeriesContainer title="React y TypeScript" />
    <SeriesContainer title="Firebase" />
  </div>
);
*/
