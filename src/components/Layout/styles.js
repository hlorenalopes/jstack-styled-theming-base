import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;

    & + a {
      /*só aplica para os que vem depois do primeiro */
      margin-left: 16px;
    }
  }
`;
