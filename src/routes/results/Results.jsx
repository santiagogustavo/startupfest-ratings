import React from 'react';
import firebase from 'utils/firebase';
import _ from 'lodash';

import Loader from 'components/loader';
import Star from 'components/star';

import history from 'utils/history';

import {
  Container,
  LoaderContainer,
  SlideContainer,
  LineWrapper,
  RatingTitle,
  StarsContainer,
  ResultsTable,
  ScoresContainer,
  Score,
  Row,
  RowWrapper,
  Position,
  StartupTitle,
  StartupInfo,
  Description,
  Votes,
} from './styles';

class Results extends React.Component {
  state = {
    ratings: [],
    isLoading: false,
  }

  ref = firebase.firestore().collection('ratings');

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.fetchRatings);
  }

  fetchRatings = (snapshot) => {
    const ratings = [];

    this.setState({ isLoading: true });
    snapshot.forEach((rating) => {
      const {
        name, proposal, pitch, development,
      } = rating.data();
      ratings.push({
        key: rating.id,
        name,
        proposal,
        pitch,
        development,
      });
    });

    const grouped = _.groupBy(ratings, 'name');
    const total = Object.keys(grouped).reduce((acc, next) => acc + grouped[next].length, 0);
    const mapped = Object.keys(grouped).map((startup) => {
      const count = grouped[startup].length;
      const proposal = grouped[startup].reduce((cur, next) => cur + next.proposal, 0) / count;
      const pitch = grouped[startup].reduce((cur, next) => cur + next.pitch, 0) / count;
      const development = grouped[startup].reduce((cur, next) => cur + next.development, 0) / count;
      const mean = count / total;
      const score = ((proposal + pitch + development) / 3) * mean;

      return {
        name: startup,
        proposal,
        pitch,
        development,
        count,
        score,
      };
    });

    const sorted = _.orderBy(mapped, ['score'], ['desc']);

    this.setState({ isLoading: false });
    this.setState({
      ratings: sorted,
    });
  }

  getStarFill = (count, ref) => {
    const isExact = ref % Math.floor(ref) === 0;

    if (count <= Math.ceil(ref)) {
      if (!isExact && count === Math.ceil(ref)) return 'half';
      return 'fill';
    }

    return 'empty';
  };

  renderResults = () => {
    const { ratings } = this.state;

    return (
      <SlideContainer>
        <Description>
          Abaixo está o ranking para as startups no nosso evento, de acordo com o número de votos e as avaliações
          enviadas. Se sua startup não está listada, não se preocupe: assim que algum voto for contabilizado ela
          será listada!
        </Description>
        <ResultsTable>
          {
            ratings.map((startup, index) => (
              <Row key={`startup-entry-${startup.name}`}>
                <RowWrapper>
                  <StartupInfo>
                    <Position>{index + 1}º</Position>
                    <StartupTitle onClick={() => history.push(`/startup?name=${startup.name}`)}>
                      {startup.name}
                    </StartupTitle>
                  </StartupInfo>
                  <Votes>
                    <b style={{ marginRight: 16 }}>Votos contabilizados:</b>
                    <span>{startup.count}</span>
                  </Votes>
                </RowWrapper>
                <ScoresContainer>
                  <LineWrapper>
                    <RatingTitle>Proposta</RatingTitle>
                    <StarsContainer>
                      {
                        [1, 2, 3, 4, 5].map(count => (
                          <Star
                            key={`proposal-star-${count}-startup-${index}`}
                            fill={this.getStarFill(count, startup.proposal)}
                            active={count <= Math.ceil(startup.proposal)}
                            clickable={false}
                            size="20px"
                          />
                        ))
                      }
                      <Score>({startup.proposal.toFixed(1)}/5.0)</Score>
                    </StarsContainer>
                  </LineWrapper>

                  <LineWrapper>
                    <RatingTitle>Apresentação/Pitch</RatingTitle>
                    <StarsContainer>
                      {
                        [1, 2, 3, 4, 5].map(count => (
                          <Star
                            key={`pitch-star-${count}-startup-${index}`}
                            fill={this.getStarFill(count, startup.pitch)}
                            active={count <= Math.ceil(startup.pitch)}
                            clickable={false}
                            size="20px"
                          />
                        ))
                      }
                      <Score>({startup.pitch.toFixed(1)}/5.0)</Score>
                    </StarsContainer>
                  </LineWrapper>

                  <LineWrapper>
                    <RatingTitle>Desenvolvimento</RatingTitle>
                    <StarsContainer>
                      {
                        [1, 2, 3, 4, 5].map(count => (
                          <Star
                            key={`pitch-star-${count}-startup-${index}`}
                            fill={this.getStarFill(count, startup.development)}
                            active={count <= Math.ceil(startup.development)}
                            clickable={false}
                            size="20px"
                          />
                        ))
                      }
                      <Score>({startup.development.toFixed(1)}/5.0)</Score>
                    </StarsContainer>
                  </LineWrapper>
                </ScoresContainer>
              </Row>
            ))
          }
        </ResultsTable>
      </SlideContainer>
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        {
          isLoading
            ? <LoaderContainer><Loader /></LoaderContainer>
            : this.renderResults()
        }
      </Container>
    );
  }
}

export default Results;
