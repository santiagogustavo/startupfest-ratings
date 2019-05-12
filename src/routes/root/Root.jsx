import React from 'react';
import { gql } from 'apollo-boost';

import Loader from 'components/loader';

import { randomColor } from 'utils/colors';
import client from 'utils/client';
import history from 'utils/history';

import {
  Container,
  CardsContainer,
  AnimatedCard,
  LoaderContainer,
} from './styles';

class App extends React.Component {
  state = {
    startups: [],
    isLoading: false,
  }

  componentDidMount() {
    this.fetchStartups();
  }

  fetchStartups = () => {
    this.setState({ isLoading: true });
    client.query({
      query: gql`
        {
          allStartups {
            name
            imageUrl
            description
            Segment {
              name
            }
          }
        }
      `,
    }).then(({ data, error }) => {
      this.setState({ isLoading: false });

      if (!error) {
        this.setState({ startups: data.allStartups });
      }
    });
  };

  handleCardClick = (name) => {
    history.push(`/startup?name=${name}`);
  }

  renderCards = () => {
    const { startups } = this.state;

    return (
      <CardsContainer>
        {
          startups.map((startup, index) => (
            <AnimatedCard
              key={`startup-card-${index}`}
              color={randomColor()}
              name={startup.name}
              imageUrl={startup.imageUrl}
              segment={startup.Segment.name}
              delay={index * 250}
              onClick={() => this.handleCardClick(startup.name)}
            />
          ))
        }
      </CardsContainer>
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        {
          isLoading
            ? <LoaderContainer><Loader /></LoaderContainer>
            : this.renderCards()
        }
      </Container>
    );
  }
}

export default App;
