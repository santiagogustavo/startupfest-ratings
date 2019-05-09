import styled, { keyframes } from 'styled-components';

const LayerMain = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const LayerMirror = keyframes`
  0% { transform: scaleY(0) translateY(-100%); }
  100% { transform: scaleY(-0.5) translateY(-100%); }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: 768px) {
    width: 40%;
  }
  #logo-layer-main-container, #logo-layer-main, #logo-layer-mirror {
    width: 100%;
  }
  #logo-layer-main, #logo-layer-mirror {
    pointer-events: none;
    filter: invert(100%);  
  }
  #logo-layer-main-container {
    overflow: hidden;
  }
  #logo-layer-main {
    animation: ${LayerMain} 1s ease forwards;
    animation-iteration-count: 1;
  }
  #logo-layer-mirror {
    opacity: 0.2;
    animation: ${LayerMirror} 1s ease forwards;
    animation-iteration-count: 1;
    transform-origin: center top;
  }

  &:hover {
    #logo-layer-main-container {
      overflow: initial;
    }
    #logo-layer-main {
      transform: translateY(-5px);
    }
    #logo-layer-mirror {
      transform: scaleY(-0.4) translateY(-100%);
    }
  }
`;
