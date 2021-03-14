/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 70vh;
    width: 100%;
    display: block;
    overflow-y: auto;
    
    @media (max-width: 456px) {
    width: 100vw;
  }
`;

export const Span = styled.span`
  width: 100%;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
