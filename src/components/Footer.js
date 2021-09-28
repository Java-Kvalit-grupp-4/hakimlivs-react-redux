import React, {useEffect, useState} from 'react'
import {FooterContainer, FooterWrapper, StyledFooter} from "./styles/Footer.styled";

import {FONT_SIZE} from "./styles/constants.sytle";
import {useDispatch, useSelector} from "react-redux";
import {loadStoreInformation} from "../redux/actions/storeInformationAction";
import {useHistory} from "react-router";

const Footer = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadStoreInformation())
        ;
    }, [])

    const handleAboutUsClick = () => {
        history.push('/about-us')
    }

    const handleCopy = (e) => {
        console.log(e.target.innerText)
        navigator.clipboard.writeText(e.target.innerText)
            .then(() => {
                alert("copyed to clipboard")
            })
    }



    const storeInfo = useSelector(state => state.storeInfoState.info)

    return (
        <>
            <StyledFooter>
                <FooterContainer>
                    <FooterWrapper fontSize={FONT_SIZE}>
                        <h3 className="footerTitle titlePadding">
                            Contact
                        </h3>
                        <p className='lineSpace pointer' onClick={(e) => handleCopy(e)}>{storeInfo[0].phoneNumber}</p>
                        <p className='lineSpace pointer' onClick={(e) => handleCopy(e)}>{storeInfo[0].email}</p>
                        <p className='pointer' onClick={(e) => handleCopy(e)}>{storeInfo[0].streetAddress} <br/> {storeInfo[0].zipCode}</p>
                    </FooterWrapper>
                    <FooterWrapper>
                        <h3 className="footerTitle titlePadding">
                            About Us
                        </h3>
                        <p onClick={handleAboutUsClick} className='pointer'>About Us</p>


                    </FooterWrapper>
                    <FooterWrapper>
                        <h3 className="footerTitle titlePadding">
                            Opening Hours
                        </h3>
                        <p>{storeInfo[0].openingHours}</p>
                        <p onClick={handleAboutUsClick} className='pointer'>See deviating opening hours</p>
                    </FooterWrapper>
                </FooterContainer>
            </StyledFooter>
        </>
    )
}

export default Footer;