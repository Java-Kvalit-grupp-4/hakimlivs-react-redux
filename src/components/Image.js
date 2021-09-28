import React from 'react'
import {StyledImage} from "./styles/image.styled";

const Image = ({src, altText}) => {
    return (
        <StyledImage>
            <img src={src} alt={altText}/>
        </StyledImage>
    )
}

export default Image;