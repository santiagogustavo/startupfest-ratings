import React from 'react';

import IMGLogo from 'assets/imgs/Logo.png';

import {
  Container,
  Logo,
  Link,
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
        <LinkButton href="/results">
          <i className="fas fa-clipboard-list" />
        </LinkButton>
        <Logo src={IMGLogo} />
        <Link href="/results">Resultados</Link>
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
