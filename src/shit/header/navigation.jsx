import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './item';

const Wrapper = styled.span`
  float: right;
  line-height: 19px;
`;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.data = [
      { id: 1, order: 1, label: 'Videos', url: '/series' },
      /*{ id: 2, order: 3, label: 'Proyectos', url: '/proyectos' },*/
      { id: 4, order: 2, label: 'Articulos', url: '/blog' }
    ];

    this.data.sort((a, b) => {
      return a.order > b.order;
    });
  }
  render() {
    return (
      <Wrapper>
        {this.data.map(item => <Item key={item.id} label={item.label} url={item.url} />)}
      </Wrapper>
    );
  }
}

export default Navigation;
