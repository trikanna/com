import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../utils/style-utils';
import Link from 'gatsby-link';

const ImagePlaceholder = styled.div`
  background: #333;
  color: white;
  width: 100%;
  //padding-top: 56.25%; /* 16:9 */
  height: 284px;
  position: relative;
  margin-bottom: 20px;

  ${media.xl`height: 200px;`};
  ${media.lg`height: 200px;`};
  ${media.md`height: 200px;`};
  ${media.sm`height: 180px;`};
  ${media.xs`height: 230px;`};

  h2 {
    width: calc(100% - 30px);
    font-weight: 800;
    position: absolute;
    line-height: normal;
    font-size: 21px;
    top: 34px;
    top: 13px;
    top: 23px;
    left: 15px;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 15px;
    margin: 0;
    font-size: 7pt;
    font-weight: 800;
    color: #ccc;
    letter-spacing: 0.09em;

    strong {
      font-weight: 900;
      letter-spacing: initial;
      font-size: 9pt;
    }
  }
`;

class Post extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { title, path, image, order } = this.props.data.node.childMarkdownRemark.frontmatter;
    const { timeToRead: time } = this.props.data.node.childMarkdownRemark;

    return (
      <Col lg={3} md={4} sm={6} xs={12}>
        <Link to={path}>
          <ImagePlaceholder
            style={{
              backgroundImage: 'linear-gradient(20deg, #111 15%, #ed1e79 100%), url(' + image + ')',
              backgroundBlendMode: 'hard-light',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <p>
              Lectura de <strong>{time}</strong> minuto{time > 1 ? 's' : ''}
            </p>
            <h2>
              #{order} - {title}
            </h2>
          </ImagePlaceholder>
        </Link>
        {/*<Link to={path}>{title}</Link>*/}
      </Col>
    );
  }
}

export default Post;
