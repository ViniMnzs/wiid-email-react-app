/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

const theme = true;

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
        background-color: ${theme ? '#FFF' : '#282a36'};
        color: ${theme ? '#000' : '#FFF'};
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }
`;
