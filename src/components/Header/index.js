import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Header extends Component {
  static propTypes = {
    //com static o atributo pertence à classe em si, em vez da instância da classe sem o static
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  };

  render() {
    const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type='button' onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌛'}
        </button>
      </Container>
    );
  }
}
