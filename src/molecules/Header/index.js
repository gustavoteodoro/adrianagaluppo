import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { HeaderContainer, HeaderTitle, HeaderNav, HeaderList, MenuItem } from './styles';

class Header extends Component {
  render() {
    const isHome = this.props.match.isExact;

    return (
      <HeaderContainer isHome={isHome}>
        <Link to="/">
          <HeaderTitle>adriana <span>galuppo</span></HeaderTitle>
        </Link>
        <HeaderNav>
          <HeaderList>
            <Link to="/">
              <MenuItem>work</MenuItem>
            </Link>
            <Link to="/bio">
              <MenuItem>bio</MenuItem>
            </Link>
            <Link to="/contact">
              <MenuItem>contact</MenuItem>
            </Link>
          </HeaderList>
        </HeaderNav>
      </HeaderContainer>
    );
  }
}

export default withRouter(Header);