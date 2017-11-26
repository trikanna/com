import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.span`
  margin-left: 20px;
  // font-family: Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
  font-size: 13px;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
  letter-spacing: initial;

  a {
    padding: 1px 5px;

    &.active {
      cursor: default;
      background: yellow;
    }
  }
`;

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { url, label, active } = this.props;
    return (
      <Button>
        <Link activeClassName="active" to={url}>
          {label}
        </Link>
      </Button>
    );
  }
}

Item.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Item;
