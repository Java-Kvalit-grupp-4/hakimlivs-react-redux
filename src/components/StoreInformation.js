import React, {useEffect} from 'react'
import {StyledStoreInformation} from "./styles/StoreInformation.styled";
import {useDispatch, useSelector} from "react-redux";
import {loadStoreInformation} from "../redux/actions/storeInformationAction";
import Image from "./Image";
import {imageSource} from "../api/paths";
import {FONT_SIZE} from "./styles/constants.sytle";

const StoreInformation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadStoreInformation());
    }, [])

    const storeInfo = useSelector(state => state.storeInfoState.info)

    const test = storeInfo[0].deviatingHours.split("/");


    return (
        <StyledStoreInformation fontSize={FONT_SIZE}>
            <h1 className='title'>About Us</h1>
            <Image src={imageSource + storeInfo[0].imageUrl} altText='sad'/>
            <p className='underTitle'>Information:</p>
            <p className='information'>{storeInfo[0].aboutInfo}</p>
            <p className='underTitle'>Deviating Hours:</p>
            {test && test.map((value,index) =>
                <p key={index}  className='information'>{value}</p>
            )}
        </StyledStoreInformation>
    )
}

export default StoreInformation;