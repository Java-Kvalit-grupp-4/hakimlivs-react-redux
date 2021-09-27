import React from 'react'
import {StyledInput} from "./styles/Input.styled";

const Input = ({id,label, type, value, setValue, onKeyPress}) => {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type={type} value={value} onKeyPress={(e) => onKeyPress(e)} onChange={(e) => setValue(e.target.value)} />
        </StyledInput>
    )
}



export default Input;