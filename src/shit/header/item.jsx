import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: initial;

  a {
    padding: 4px 7px 5px 7px;

    &.active {
      cursor: default;
      background: #007aff;
      border-radius: 2px;
      color: white !important;
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
