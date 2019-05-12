import React from 'react';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Button from 'components/button';
import Loader from 'components/loader';
import Star from 'components/star';
import Tag from 'components/tag';

import client from 'utils/client';
import history from 'utils/history';
import formatCurrency from 'utils/format-currency';

import {
  Container,
  LoaderContainer,
  SlideContainer,
  StartupImage,
  InfosContainer,
  Title,
  Subtitle,
  Infos,
  Description,
  LineWrapper,
  RateContainer,
  TitleAlt,
  RatingTitle,
  StarsContainer,
  ButtonsContainer,
} from './styles';

class Startup extends React.Component {
  state = {
    startup: {
      name: '',
      Segment: { name: '' },
    },
    proposal: 0,
    pitch: 0,
    development: 0,
    isLoading: false,
  }

  componentDidMount() {
    const {
      location: { search },
    } = this.props;
    const query = queryString.parse(search);

    this.fetchStartup(query.name);
  }

  fetchStartup = (name) => {
    this.setState({ isLoading: true });
    client.query({
      query: gql`
        {
          allStartups(filter: { name: \"${name}\" }) {
            name
            imageUrl
            description
            teamCount
            annualReceipt
            Segment {
              name
            }
          }
        }
      `,
    }).then(({ data, error }) => {
      this.setState({ isLoading: false });

      if (!error) {
        this.setState({ startup: data.allStartups[0] });
      }
    });
  }

  handleCategoryRating = (category, rating) => this.setState({ [category]: rating });

  renderStartup = () => {
    const {
      startup,
      proposal,
      pitch,
      development,
    } = this.state;

    return (
      <SlideContainer>
        <StartupImage src={startup.imageUrl} />
        <InfosContainer>
          <LineWrapper>
            <Title style={{ marginRight: 16 }}>{startup.name}</Title>
            <Tag invert>{startup.Segment.name}</Tag>
          </LineWrapper>
          <Infos>
            <Subtitle>Descrição</Subtitle>
            <Description>{startup.description}</Description>
            <br />
            <LineWrapper>
              <b style={{ marginRight: 16 }}>Membros na equipe:</b>
              <Description>{startup.teamCount}</Description>
            </LineWrapper>
            <LineWrapper>
              <b style={{ marginRight: 16 }}>Receita anual:</b>
              <Description>R$ {formatCurrency(startup.annualReceipt)}</Description>
            </LineWrapper>
          </Infos>
          <RateContainer>
            <TitleAlt>Avaliar</TitleAlt>
            <Infos>
              <Description>
                Use as estrelas para atribuir notas à startup em cada categoria. Quando concluir, use o botão ao
                fim para enviar sua avaliação!
              </Description>
            </Infos>
            <LineWrapper>
              <RatingTitle>Proposta</RatingTitle>
              <StarsContainer>
                {
                  [1, 2, 3, 4, 5].map(count => (
                    <Star
                      key={`proposal-star-${count}`}
                      fill={count <= proposal ? 'fill' : 'empty'}
                      active={count <= proposal}
                      onClick={() => this.handleCategoryRating('proposal', count)}
                    />
                  ))
                }
              </StarsContainer>
            </LineWrapper>
            <LineWrapper>
              <RatingTitle>Apresentação/Pitch</RatingTitle>
              <StarsContainer>
                {
                  [1, 2, 3, 4, 5].map(count => (
                    <Star
                      key={`pitch-star-${count}`}
                      fill={count <= pitch ? 'fill' : 'empty'}
                      active={count <= pitch}
                      onClick={() => this.handleCategoryRating('pitch', count)}
                    />
                  ))
                }
              </StarsContainer>
            </LineWrapper>
            <LineWrapper>
              <RatingTitle>Desenvolvimento</RatingTitle>
              <StarsContainer>
                {
                  [1, 2, 3, 4, 5].map(count => (
                    <Star
                      key={`development-star-${count}`}
                      fill={count <= development ? 'fill' : 'empty'}
                      active={count <= development}
                      onClick={() => this.handleCategoryRating('development', count)}
                    />
                  ))
                }
              </StarsContainer>
            </LineWrapper>
          </RateContainer>
          <ButtonsContainer>
            <Button>
              Avaliar
            </Button>
            <Button onClick={() => history.push('/')} invert>
              Voltar
            </Button>
          </ButtonsContainer>
        </InfosContainer>
      </SlideContainer>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        {
          isLoading
            ? <LoaderContainer><Loader /></LoaderContainer>
            : this.renderStartup()
        }
      </Container>
    );
  }
}

Startup.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default Startup;
