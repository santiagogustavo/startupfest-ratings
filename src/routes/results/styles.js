import styled, { keyframes } from 'styled-components';
import media from 'utils/media';

const Slide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  background: var(--color-background);
  padding: 8px 16px;
  padding-bottom: 32px;

  ${media.medium`
    padding: 32px 64px;
  `}
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideContainer = styled.div`
  animation: ${Slide} 500ms 1 ease;
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  ${media.medium`
    flex-direction: row;
  `}
`;

export const RatingTitle = styled.span`
  font-family: 'Lobster', sans-serif;
  font-size: 24px;
  width: 100%;

  ${media.medium`
    text-align: initial;
    width: initial;
  `}
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  ${media.medium`
    margin-left: 24px;
    margin-right: initial;
    margin-bottom: 12px;
  `}
`;

export const ResultsTable = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 90%;

  & > * {
    border-top: var(--color-primary) 3px solid;
  }

  & > *:first-child {
    border-top: none;
  }

  ${media.medium`
    width: 60%;
  `}
`;

export const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

export const Score = styled.span`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-secondary);
  margin-left: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 32px 0;

  & > * {
    flex: 1;
  }

  ${media.medium`
    flex-direction: row;
  `}
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  ${media.medium`
    margin-bottom: initial;
  `}
`;

export const Position = styled.h1`
  flex: 0;
  margin-top: 0;
  margin-right: 32px;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-primary);

  ${media.medium`
    margin-right: 64px;
  `}
`;

export const StartupTitle = styled.div`
  margin-top: 4px;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-primary);
  font-size: 24px;
  text-decoration: none;
  transition: all 200ms ease;
  color: var(--color-primary);

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const StartupInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Description = styled.p`
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-secondary);
  margin-top: 0;
  color: var(--color-text-light);
  font-weight: 300;
  margin: auto;
  width: 90%;
  margin-bottom: 32px;

  ${media.medium`
    width: 60%;
  `}
`;

export const Votes = styled.div`
  display: flex;
  align-items: baseline;
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-secondary);
  width: 100%;
  
  & > * {
    flex: 1;
  }
  & > span {
    color: var(--color-text-light);
  }
`;
