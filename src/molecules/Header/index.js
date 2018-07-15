import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { HeaderContainer, HeaderTitle } from './styles';

class Header extends Component {
  render() {
    const isHome = this.props.match.isExact;

    return (
      <HeaderContainer isHome={isHome}>
        <Link to="/">
          <HeaderTitle>adriana <span>galuppo</span></HeaderTitle>
        </Link>
      </HeaderContainer>
    );
  }
}

export default withRouter(Header);