import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  min-height: 230px;
  width: 256px;
  padding: 24px;
  border-radius: var(--border-radius-default);
  background: ${props => props.color};
`;

export const Tag = styled.div`
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
