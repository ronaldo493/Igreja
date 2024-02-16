import React from "react";
import { StyleInput, Input } from '../../styles/map'; 

const InputField = ({label, type, placeholder, value, onChange }) => {
    return (
        <StyleInput>
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} ></Input>
        </StyleInput>
    )
}

export default InputField;