import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: var(--border-radius-default);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-secondary);
  background: var(--color-background);
  margin-bottom: 8px;
  padding: 4px 16px;
  padding-left: 8px;
  width: fit-content;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > i {
    color: var(--color-primary);
    margin-right: 8px;
  }

  ${props => props.invert && css`
    background: var(--color-primary);
    color: var(--color-background);
    & > i {
      color: var(--color-background);
    }
  `}
`;
