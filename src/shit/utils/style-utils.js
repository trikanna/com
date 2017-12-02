import { css } from 'styled-components';

const sizes = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 480,
  xs: 320
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});
