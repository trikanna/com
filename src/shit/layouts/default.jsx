import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Wrapper = styled.div``;

class DefaultLayout extends Component {
  render() {
    return (
      <Wrapper>
        <Grid fluid={false} className="debugs">
          {this.props.children}
        </Grid>
      </Wrapper>
    );
  }
}

export default DefaultLayout;
