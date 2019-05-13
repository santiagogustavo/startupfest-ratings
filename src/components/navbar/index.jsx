import React from 'react';

import IMGLogo from 'assets/imgs/Logo.png';
import history from 'utils/history';

import {
  Container,
  LogoLink,
  Logo,
  Link as LinkText,
  LinkButton,
  SearchBar,
} from './styles';

class Navbar extends React.Component {
  state = {
    search: '',
  };

  handleSearchChange = event => this.setState({ search: event.target.value });

  render() {
    const { search } = this.state;

    return (
      <Container>
        <LinkButton onClick={() => history.push('/results')}>
          <i className="fas fa-clipboard-list" />
        </LinkButton>
        <LogoLink onClick={() => history.push('/')}>
          <Logo src={IMGLogo} />
        </LogoLink>
        <LinkText onClick={() => history.push('/results')}>Resultados</LinkText>
        <SearchBar
          type="text"
          id="navbar-search"
          placeholder="Buscar por nome"
          onChange={this.handleSearchChange}
          value={search}
        />
      </Container>
    );
  }
}

export default Navbar;
