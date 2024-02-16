import React from "react";
import { LogLinks } from '../../styles/map';
import { Forget } from '../../styles/map';


const Links = () => {
    return (
        <LogLinks>
            <Forget>
                <a href="#">Cadastre-se</a>
            </Forget>
            <Forget>
                <a href="#">Esqueceu sua senha?</a>
            </Forget>
            
        </LogLinks>
    )
}
export default Links;