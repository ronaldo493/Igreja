import styled from 'styled-components';

// ESTILOS COMUNS ENTRE BUTTON E INPUT
const InputButtonBase = `
    width: 100%;
    height: 50px;
    outline:none;
    font-size: 15px;
`;

// BUTTON
export const Button = styled.button`
    ${InputButtonBase};
    margin-top: 35px;
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
    padding: 10px 0;
`;

export const Input = styled.input`
    ${InputButtonBase};
    text-align: center;
`;


// LOGINFORM
export const StyleContainer = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyleForm = styled.form`
    width: 400px;
    height: 350px;
    background-color: #fff;
    box-shadow: 0 2px 100px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`;

export const Error = styled.p`
    color: red;
    font-weight: bold;
    margin-top: 35px;
`;

export const Forget = styled.p`
    cursor: pointer;
    color: #3498db;
    transition: color 0.3s;

    &:hover {
        color: #076dda;
    }
`;

