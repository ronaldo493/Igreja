import styled from 'styled-components';

// ESTILOS COMUNS ENTRE BUTTON E INPUT
const InputButtonBase = `
    width: 100%;
    height: 45px;
    
`;

// BUTTON
export const Button = styled.button`
    ${InputButtonBase};
    margin-top: 15px;
`;

// INPUT
export const StyleInput = styled.div`
    width: 98%;
    padding-bottom: 10px;
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
    width: 380px;
`;
