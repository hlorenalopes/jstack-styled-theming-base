import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();

  function handleNavigate() {
    history.push('/');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <div>
        <button onClick={handleNavigate} style={{ color: '#fff' }}>
          Voltar para a home
        </button>
        <button type='button' onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌛'}
        </button>
      </div>
    </Container>
  );
}
