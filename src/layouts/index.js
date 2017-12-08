import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../shit/header/container';
import DefaultLayout from '../shit/layouts/default';

import './reset.scss';
import './global.scss';

// import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-tomorrow.css';

const TemplateWrapper = ({ children }) => (
  <div className="__hidden__">
    <Helmet
      title="Santiago Camelo"
      htmlAttributes={{ lang: 'es' }}
      meta={[
        {
          name: 'description',
          content: 'Santiago Camelo, one commit at a time'
        },
        {
          name: 'keywords',
          content: 'blog, react, react native, blog, vlog, cursos, tutoriales, gratis'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      ]}
    />

    <Header />

    <DefaultLayout>{children()}</DefaultLayout>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
