import styled, { css } from 'styled-components';
import media from 'utils/media';

export const Container = styled.div`
  background: linear-gradient(var(--color-background) 75%, transparent);
  position: sticky;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  ${media.medium`
    justify-content: flex-start;
  `}
`;

export const LogoLink = styled.a`
  flex: 0;
  padding: 16px;
  width: fit-content;
  margin-left: 0px;

  ${media.medium`
    margin-left: 32px;
  `}
`;

export const Logo = styled.img`
  display: block;
  height: 40px;
  width: auto;
`;

const LinkStyles = css`
  color: var(--color-primary);
  text-decoration: none;
  transition: all 200ms ease;

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const LinkButton = styled.a`
  ${LinkStyles}
  position: absolute;
  top: 12px;
  left: 32px;
  display: block;
  font-size: 32px;

  ${media.medium`
    display: none;
  `}
`;

export const Link = styled.a`
  ${LinkStyles}
  display: none;
  margin-top: 8px;
  margin-left: 32px;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-primary);

  ${media.medium`
    display: block;
  `}
`;

export const SearchBar = styled.input`
  display: none;
  border: none;
  border-bottom: 1px solid var(--color-text);
  background: transparent;
  padding: 8px;
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-secondary);
`;
