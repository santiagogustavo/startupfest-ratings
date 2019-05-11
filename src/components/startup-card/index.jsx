import React from 'react';
import PropTypes from 'prop-types';
import { randomColor } from 'utils/colors';

import IMGStartupPlaceholder from 'assets/imgs/startup-placeholder.png';

import {
  Container,
  Tag,
  Image,
  Title,
} from './styles';

const StartupCard = ({
  className, color, name, imageUrl, segment,
}) => (
  <Container className={className} color={color}>
    {
      segment && (
        <Tag>
          <i className="fas fa-star" />
          {segment}
        </Tag>
      )
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
