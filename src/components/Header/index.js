import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Header extends Component {
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

Header.propTypes = {
  selectedTheme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};
