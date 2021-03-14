/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.checked ? 'rgba(255, 128, 0, 1)' : 'transparent')};
    border: 0.5px solid black;
    padding: 10px;
    cursor: pointer;
    strong, button {
      background-color: ${(props) => (props.checked ? 'rgba(255, 128, 0, 1)' : 'transparent')};
    }
    :hover{
      background-color: rgba(255, 128, 0, 0.1);
      button{
      background-color:rgba(255, 128, 0, 0.2);
      color: rgba(255, 128, 0, 0.5);
      }
    }
    @media (max-width: 456px) {
    height: 12vh;
  }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    width: 5%;
    background-color: transparent;
`;

export const Profile = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 50px;
  border-radius: 100px;
  outline: transparent;
  text-align: center;
  margin-right: 10px;
  border: 0.5px solid;
  cursor: pointer;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? 'rgba(255, 128, 0, 1)' : 'transparent')};
  svg{
    background-color: ${(props) => (props.checked ? 'rgba(255, 128, 0, 1)' : 'transparent')};
  }
  
  @media (max-width: 456px) {
    width: 30px;
    height: 30px;
    border-radius: 40px;
  }
`;

export const ProfileUsers = styled.button`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-radius: 25px;
  border: 1px solid black;
  outline: transparent;
  cursor: pointer;
  text-align: center;

  @media (max-width: 456px) {
    display: none;
  }
`;

export const Message = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 80%;
    padding-left: 10px;
    background-color: transparent;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: transparent;
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 15%;
    background-color: transparent;
`;
