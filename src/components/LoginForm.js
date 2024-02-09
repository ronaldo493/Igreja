import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { StyleContainer, StyleForm } from '../styles/map'; 

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState ('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Preencha todos os campos.')
            return
        }

        console.log('Username:', username);
        console.log('Password:', password)

        setError ('');
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

                <Button onClick={(e) => handleLogin(e)}>
                    Entrar
                </Button>

                {error && <p>{error}</p>}
            </StyleForm>
        </StyleContainer>
    )
}

export default LoginForm;
