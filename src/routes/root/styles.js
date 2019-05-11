import styled, { css, keyframes } from 'styled-components';
import StartupCard from 'components/startup-card';
import media from 'utils/media';

const CardPopUpInitial = css`
  pointer-events: none;
  opacity: 0;
  transform: scaleX(0.8) translateY(32px);
`;

export const CardPopUp = keyframes`
  0% {
    ${CardPopUpInitial}
  }
  100% {
    pointer-events: initial;
    opacity: 1;
    transform: scaleX(1) translateY(0px);
  }
`;

export const Container = styled.div`
  background: var(--color-background);
  padding: 8px 16px;

  ${media.medium`
    padding: 32px 64px;
  `}
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AnimatedCard = styled(StartupCard)`
  ${CardPopUpInitial}
  margin: 16px;
  animation: ${CardPopUp} 500ms ${props => props.delay}ms 1 forwards ease;
`;
