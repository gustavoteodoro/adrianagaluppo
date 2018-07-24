import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FooterContainer, FooterText } from './styles';

class Header extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterText>Copyright © 2018 Adriana Galuppo</FooterText>
      </FooterContainer>
    );
  }
}

export default withRouter(Header);