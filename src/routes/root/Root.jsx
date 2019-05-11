import React from 'react';
import { randomColor } from 'utils/colors';

import {
  Container,
  CardsContainer,
  AnimatedCard,
} from './styles';

class App extends React.Component {
  state = {
    startups: [
      {
        name: 'CORP 1',
        segment: 'Health tech',
      },
      {
        name: 'CORP 2',
        segment: 'Health tech',
      },
      {
        name: 'CORP 3',
        segment: 'Health tech',
      },
      {
        name: 'CORP 4',
        segment: 'Health tech',
      },
      {
        name: 'CORP 5',
        segment: 'Health tech',
      },
      {
        name: 'CORP 6',
        segment: 'Health tech',
      },
      {
        name: 'CORP 7',
        segment: 'Health tech',
      },
      {
        name: 'CORP 8',
        segment: 'Health tech',
      },
    ],
  }

  render() {
    const { startups } = this.state;

    return (
      <Container>
        <CardsContainer>
          {
            startups.map((startup, index) => (
              <AnimatedCard
                key={`startup-card-${index}`}
                color={randomColor()}
                name={startup.name}
                segment={startup.segment}
                delay={index * 250}
              />
            ))
          }
        </CardsContainer>
      </Container>
    );
  }
}

export default App;
