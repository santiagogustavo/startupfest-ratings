import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const Button = ({ children, invert, ...props }) => (
  <Container invert={invert} {...props}>
    {children}
  </Container>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  invert: PropTypes.bool,
};

Button.defaultProps = {
  invert: false,
};

export default Button;
