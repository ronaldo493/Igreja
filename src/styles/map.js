import styled, { keyframes, css } from 'styled-components';

// ESTILOS COMUNS ENTRE BUTTON E INPUT
const InputButtonBase = `
    width: 100%;
    height: 50px;
    outline: none;
    font-size: 15px;
`;

// BUTTON
export const Button = styled.button`
    ${InputButtonBase};
    margin-top: 10%;
    transition: 0.2s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #b4afaf;
    background-color: #dfdfdf;

    &:hover {
        background-color: #b4afaf;
    }
`;

// INPUT
export const StyleInput = styled.div`
    width: 98%;
    padding: 2% 0;
`;

export const Input = styled.input`
    ${InputButtonBase};
    text-align: center;
`;


// LOGINFORM
export const StyleContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// ANIMAÇÃO
const shake = keyframes`
    0%, 100% 
    {
        transform: translateX(0);
    }   
    10%, 30%, 50%, 70%, 90% 
    {
        transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% 
    {
        transform: translateX(10px);
    }
`;

export const StyleForm = styled.form`
    width: 100%;
    max-width: 300px;
    height: 35vh;
    background-color: #fff;
    box-shadow: 0 10px 100px rgba(0, 0, 1, 0.1);
    border-radius: 30px;
    padding: 9%;
    text-align: center;

// ANIMAÇÃO
    ${({ animate }) => animate && css`
        animation: ${shake} 0.5s ease-in-out;
    `}
`;



export const Error = styled.p`
    color: red;
    font-weight: bold;
    margin-top: 10%;
`;

export const Forget = styled.p`
    cursor: pointer;
    color: #3498db;
    transition: color 0.3s;

    &:hover {
        color: #076dda;
    }
`;
