import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignInContainer, ButtonContainer, SignInTitleContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
    googleSignInStart,
    emailSignInStart
} from '../../redux/user/user.actions';

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({
        email:'',
        password: ''
    });
    const dispatch = useDispatch();
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault()
        dispatch(emailSignInStart({ email, password }))
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]:value});
    }

    return (
        <SignInContainer>
            <SignInTitleContainer>I already have an account</SignInTitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <ButtonContainer>
                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>
                    <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>
                        Sign in with google
                    </CustomButton>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn;