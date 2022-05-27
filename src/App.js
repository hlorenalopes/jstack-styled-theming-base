import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  constructor(props) {
    // primeira forma de usar states com class components
    super(props); // executa o método construtor

    this.state = {
      theme: 'dark',
    };

    this.handleToggleTheme = this.handleToggleTheme.bind(this); //tá fazendo com que o this do handleToggleTeam seja o this do construtor que é a classe App
  }

  handleToggleTheme() {
    this.setState((prevState) => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout onToggleTheme={this.handleToggleTheme} selectedTheme={theme} />
      </ThemeProvider>
    );
  }
}

export default App;
