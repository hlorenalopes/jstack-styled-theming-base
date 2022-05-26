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
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState((prevState) => ({
              theme: prevState.theme === 'dark' ? 'light' : 'dark',
            })); //faz um merge com o this.state passado no constructor
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
//   }

// return (
//   <ThemeProvider theme={currentTheme}>
//     <GlobalStyle />
//     <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
//   </ThemeProvider>
// );
// }

export default App;
