import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  min-height: 230px;
  width: 256px;
  padding: 24px;
  border-radius: var(--border-radius-default);
  background: ${props => props.color};
`;

export const Image = styled.img`
  background: var(--color-background);
  border-radius: var(--border-radius-half);
  overflow: hidden;
  height: 175px;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-primary);
  font-size: var(--font-size-card);
  color: var(--color-background);
  margin-top: 16px;
  text-align: center;
`;
