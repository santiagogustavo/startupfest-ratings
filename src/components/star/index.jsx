import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

const getClassName = (fill) => {
  switch (fill) {
    case 'fill':
      return 'fas fa-star';
    case 'half':
      return 'fas fa-star-half-alt';
    case 'empty':
    default:
      return 'far fa-star';
  }
};

const Star = ({
  fill, size, active, clickable, ...props
}) => (
  <Container
    className={getClassName(fill)}
    active={active}
    clickable={clickable}
    size={size}
    {...props}
  />
);

Star.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  active: PropTypes.bool,
  clickable: PropTypes.bool,
};

Star.defaultProps = {
  fill: 'empty',
  size: '32px',
  active: false,
  clickable: true,
};

export default Star;
