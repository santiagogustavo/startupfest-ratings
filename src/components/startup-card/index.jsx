import React from 'react';
import PropTypes from 'prop-types';
import { randomColor } from 'utils/colors';

import IMGStartupPlaceholder from 'assets/imgs/startup-placeholder.png';
import Tag from 'components/tag';

import {
  Container,
  Image,
  Title,
} from './styles';

const StartupCard = ({
  className, color, name, imageUrl, segment, ...props
}) => (
  <Container className={className} color={color} {...props}>
    {
      segment && <Tag>{segment}</Tag>
    }
    <Image src={imageUrl} />
    <Title>{name}</Title>
  </Container>
);

StartupCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  segment: PropTypes.string,
};

StartupCard.defaultProps = {
  className: undefined,
  color: randomColor(),
  imageUrl: IMGStartupPlaceholder,
  segment: undefined,
};

export default StartupCard;
