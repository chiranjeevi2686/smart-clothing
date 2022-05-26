import React from "react";
import { render, fireEvent } from '@testing-library/react';
import SignIn from './sign-in.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = 
    {
        displayName: '',
        name: '',
        email: '',
        password: ''
    };
const mockStore = configureStore();
describe('SignIn component', () => {
    it('should render SignIn', async () => {
        const { asFragment, getByTestId } = render(<Provider store={mockStore(defaultStore)}>
            <SignIn />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        const emailInput = getByTestId('email-input')
        const passwordInput = getByTestId('password-input')
        const signInButton = getByTestId('sign-in-button')
        const signInButtonGoogle = getByTestId('sign-in-button-google')
        fireEvent.change(emailInput, {target:{value:'testmail'}})
        fireEvent.change(passwordInput, {target:{value:'testpwd'}})
        fireEvent.click(signInButton)
        fireEvent.click(signInButtonGoogle)
        
    })
})
