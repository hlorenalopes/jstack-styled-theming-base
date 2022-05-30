import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: JSON.parse(localStorage.getItem('theme')), //mantém o estado se atualizar a página, mas aqui não é o melhor lugar pois pode dar erro
  };

  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      }),
      () => {
        localStorage.setItem('theme', JSON.stringify(this.state.theme));
      },
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
