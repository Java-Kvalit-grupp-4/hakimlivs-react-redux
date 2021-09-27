import React from 'react'
import {StyledButton} from "./styles/Button.styled";
import {COLORS, FONT_SIZE} from "./styles/constants.sytle";

const Button = ({title,onClick}) => {
    return (
        <>
            <StyledButton fontSize={FONT_SIZE} colors={COLORS} onClick={onClick}>{title}</StyledButton>
        </>
    )
}

export default Button;