/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }
`;
