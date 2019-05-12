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

export const SlideContainer = styled.div`
  display: flex;
  animation: ${Slide} 500ms 1 ease;
  flex-direction: column;

  ${media.medium`
    flex-direction: row;
  `}
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StartupImage = styled.img`
  display: block;
  width: 100%;
  height: 256px;
  border-radius: var(--border-radius-default);
  object-fit: cover;
  margin-bottom: 32px;

  ${media.medium`
    width: 30%;
    margin-bottom: initial;
  `}
`;

export const InfosContainer = styled.div`
  margin-left: initial;

  ${media.medium`
    margin-left: 64px;
  `}
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 40px;
  font-family: var(--font-family-primary);
`;

export const Subtitle = styled.h4`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
  font-family: var(--font-family-secondary);
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;

  ${media.medium`
    flex-direction: row;
  `}
`;

export const Infos = styled.div`
  margin: 16px 0;
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-secondary);
  border-top: var(--color-primary) 3px solid;
  border-left: initial;
  padding-top: 16px;
  padding-left: initial;
  padding-bottom: 16px;

  ${media.medium`
    border-top: initial;
    border-left: var(--color-primary) 3px solid;
    padding-top: initial;
    padding-left: 16px;
    padding-bottom: initial;
  `}

  & b {
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  margin-top: 0;
  color: var(--color-text-light);
  font-weight: 300;
`;

export const RateContainer = styled.div`
  margin: 16px 0;
`;

export const TitleAlt = styled.h3`
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 24px;
  font-family: var(--font-family-primary);
`;

export const RatingTitle = styled.span`
  font-family: 'Lobster', sans-serif;
  font-size: 32px;
  text-align: center;
  width: 100%;

  ${media.medium`
    text-align: initial;
    width: initial;
  `}
`;

export const StarsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  ${media.medium`
    margin-left: 24px;
    margin-right: initial;
    margin-bottom: 24px;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-right: initial;
    margin-bottom: 16px;
  }

  ${media.medium`
    flex-direction: row;
    & > * {
      margin-right: 16px;
      margin-bottom: initial;
    }
  `}
`;
