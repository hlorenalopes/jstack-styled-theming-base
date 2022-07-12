import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin: 8px;
  margin-top: 24px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 16px);
  box-sizing: border-box;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
