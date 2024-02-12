import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import Links from "./Links";
import { StyleContainer, StyleForm, Error } from '../styles/map'; 

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState ('');
    const [animateForm, setAnimateForm] = useState ('');


    // VALIDAÇÃO
    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Preencha todos os campos!')
        // ATIVA A ANIMAÇÃO
            setAnimateForm(true)
            // REINICIA O ESTADO E LIMPA OS CAMPOS
            setTimeout(() => setAnimateForm(false), 500);
            setUsername ('');
            setPassword ('');

            return;
        }

        setError ('');
    }

    return (
        <StyleContainer>
            <StyleForm animate={animateForm}>
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

                <Links />        

                <Button onClick={(e) => handleLogin(e)}>
                    LOGIN
                </Button>

                {error && <Error>{error}</Error>}
            </StyleForm>
        </StyleContainer>
    )
}

export default LoginForm;
