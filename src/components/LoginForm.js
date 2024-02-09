import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { StyleContainer, StyleForm, Error } from '../styles/map'; 

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState ('');


    // VALIDAÇÃO
    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Preencha todos os campos!')
            return
        }

        setError ('');
    }

    // ESQUECEU A SENHA
    const handleForgotPassword = () => {
        console.log('Esqueceu sua senha?');
    }

    return (
        <StyleContainer>
            <StyleForm>
                <InputField
                    placeholder="Usuário"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <InputField 
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p onClick={handleForgotPassword} style={{ cursor: 'pointer', color: '#3498db' }}>
                        Esqueceu sua senha?
                    </p>
                )}

                <Button onClick={(e) => handleLogin(e)}>
                    PROSSEGUIR
                </Button>

                {error && <Error>{error}</Error>}
            </StyleForm>
        </StyleContainer>
    )
}

export default LoginForm;
