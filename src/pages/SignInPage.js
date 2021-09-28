import React, {useEffect} from 'react'
import SignInForm from "../components/SignInForm";
import {Container} from "../components/styles/Container.styled";

const SignInPage = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div>
            <Container>
                    <SignInForm/>
            </Container>
        </div>
    )
}

export default SignInPage;