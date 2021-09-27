import React, {useState} from 'react'
import {SignInFormContainer, StyledSignIn} from "./styles/SignInForm.styled";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../redux/actions/userAction";
import {changeLoggedInStatus} from "../redux/actions/loggedInAction";
import {useHistory} from "react-router";

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleForgotPassword = () => {
        console.log("forgot password")
    }

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            handleSignIn()
        }
    }

    const handleSignIn = async () => {
        console.log("Send info to server for auth")
        const response = await dispatch(authUser(username, password));
        console.log(response)
        if (response.status === 200) {
            dispatch(changeLoggedInStatus())
            setUsername('')
            setPassword('')
            history.push('/')
        }else {
            console.log('Något gick fel!')
            // TODO: show error message to user
        }
    }

    return (
        <SignInFormContainer>
            <Card width='100%' margin='auto' padding='10rem 0 0 0'>
                <StyledSignIn>
                    <Input id='username' type='text' label='Username' value={username} setValue={setUsername} onKeyPress={handleEnterPress}/>
                    <Input id='password' type='password' label='Password' value={password} setValue={setPassword} onKeyPress={handleEnterPress}/>
                    <p onClick={handleForgotPassword}>Forgot password</p>
                    <Button onClick={handleSignIn} title='Sign In'/>
                </StyledSignIn>
            </Card>
        </SignInFormContainer>
    )
}

export default SignInForm;