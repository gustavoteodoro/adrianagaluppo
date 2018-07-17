import React, { Component } from 'react';

import { ContactContainer, ContactText } from './styles';

class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <ContactText>
          <p>galuppoadriana@gmail.com</p>
        </ContactText>
      </ContactContainer>
    );
  }
}

export default Contact;