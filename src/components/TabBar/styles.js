/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Container = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: transparent;
`;

export const Search = styled.input`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 5vh;
    border: 0.5px solid black;
    border-radius: 5px;
    padding-left: 10px;
    background-color: transparent;
`;

export const ButtonContainer = styled.div`
    background-color: transparent;
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 4;
    padding-left: 1%;
`;

export const FilterContainer = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
    padding-right: 10%;
`;

export const Button = styled.button`
  width: 6vw;
  height: 4vh;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 12px;
  text-align: center;
  outline: transparent;
  cursor: pointer;
  background-color: rgba(255, 128, 0, 0.5);

  @media (max-width: 456px) {
    width: 15vw;
  }
`;

export const MenuIcon = styled(GiHamburgerMenu)`
    width: 10vw;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer !important;

    @media (max-width: 456px) {
    display: flex;
  }
`;
