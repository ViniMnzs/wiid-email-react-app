import styled from 'styled-components';

export const Profile = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 3px solid green;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 456px) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

export const Button = styled.button`
  width: 6vw;
  height: 6vh;
  display: ${(props) => (props.view ? 'absolute' : 'none')};
  border-radius: 8px;
  margin-left: 5px;
  font-size: 12px;
  text-align: center;
  outline: transparent;
  cursor: pointer;
  background-color: #c9c9c9;

  @media (max-width: 456px) {
    width: 10vw;
  }
`;

export const Select = styled.select`
  width: 10vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  outline: transparent;
  cursor: pointer;
  background-color: rgba(255, 128, 0, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(255, 128, 0, 1);
  border-radius: 5px;

  :hover {
    background-color: rgba(255, 128, 0, 0.4);
  }

  @media (max-width: 456px) {
    width: 15vw;
  }
`;

export const Option = styled.option`
  background-color: rgba(255, 128, 0, 0.4);
`;
