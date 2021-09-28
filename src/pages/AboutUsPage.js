import React, {useEffect} from 'react'
import StoreInformation from "../components/StoreInformation";

const AboutUsPage = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <>
            <StoreInformation/>
        </>
    )
}

export default AboutUsPage;