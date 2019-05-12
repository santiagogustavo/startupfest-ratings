import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const Tag = ({ children, invert, ...props }) => (
  <Container invert={invert} {...props}>
    <i className="fas fa-star" />
    {children}
  </Container>
);

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  invert: PropTypes.bool,
};

Tag.defaultProps = {
  invert: false,
};

export default Tag;
