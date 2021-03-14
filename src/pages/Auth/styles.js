import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    width: 20vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 128, 0, 0.6);
    box-shadow: 0px 5px 5px rgba(255, 128, 0, 1);

    @media (max-width: 456px) {
        width: 50vw;
    }
`;

export const Input = styled.input`
    width: 18vw;
    height: 6vh;
    display: flex;
    align-items: flex-start;
    text-align: center;
    border-radius: 8px;
    outline: transparent;
    margin-top: 15px;
    
    @media (max-width: 456px) {
        width: 30vw;
    }
`;

export const Button = styled.button`
    width: 10vw;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    border-radius: 8px;
    outline: transparent;
    margin-top: 50px;
    cursor: pointer;

    :hover{
        background-color: #C0C0C0;
    }

    @media (max-width: 456px) {
        width: 20vw;
    }
`;

export const Message = styled.span`
    color: ${(props) => (props.color ? 'red' : 'rgba(147, 0, 0, 0.0)')};;
    font-size: 14px;
    margin-top: 20px;
    background-color: rgba(147, 0, 0, 0.0);
`;
