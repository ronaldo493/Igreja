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
    margin-top: 45px;
    transition: 0.2s;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    border: none;
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
    background-color: #fff;
    box-shadow: 0 4px 500px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`;

