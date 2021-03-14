import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const MenuContainer = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 0.5px solid;
  overflow: hidden;

  @media (max-width: 456px) {
    width: 50vw;
    display: none;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  background-color: transparent;
`;
