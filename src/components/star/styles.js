import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-size: ${props => props.size};
  margin: 0 2px;

  ${props => props.active && css`
    color: var(--color-primary);
  `}

  ${props => props.clickable && css`
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
      transform: scale(1.1);
      transform-origin: center;
      color: var(--color-primary-hover);
    }
  `}
`;
