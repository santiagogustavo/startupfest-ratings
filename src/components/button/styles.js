import styled, { css } from 'styled-components';
import media from 'utils/media';

export const Container = styled.div`
  cursor: pointer;
  border-radius: 32px;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-primary);
  background: var(--color-primary);
  color: var(--color-background);
  padding: 8px 32px;
  text-align: center;
  border: var(--color-primary) 2px solid;
  width: auto;
  transition: all 200ms ease;

  &:hover {
    background: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }

  ${props => props.invert && css`
    background: var(--color-background);
    color: var(--color-primary);
    &:hover {
      background: var(--color-background);
      color: var(--color-primary-hover);
    }
  `}

  ${media.medium`
    width: fit-content;
  `}
`;
