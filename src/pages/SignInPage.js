import React from 'react'
import SignInForm from "../components/SignInForm";
import {Container} from "../components/styles/Container.styled";

const SignInPage = () => {
    return (
        <div>
            <Container>
                    <SignInForm/>
            </Container>
        </div>
    )
}

export default SignInPage;