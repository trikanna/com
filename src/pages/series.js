import React from 'react';
import Link from 'gatsby-link';
import { Row, Col } from 'react-flexbox-grid';
import SeriesContainer from '../shit/series/container';

export default () => (
  <div>
    <SeriesContainer title="De Cero a Tero con React" />
    <SeriesContainer title="Introducción a Redux" />
    <SeriesContainer title="React y TypeScript" />
    <SeriesContainer title="Firebase" />
  </div>
);
