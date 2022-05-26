import React from "react";
import { render, fireEvent } from '@testing-library/react';
import SignUp from './sign-up.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore =
{
    displayName: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const mockStore = configureStore();
describe('SignUp component', () => {
    it('should render SignUp', async () => {
        const { asFragment, getByTestId } = render(<Provider store={mockStore(defaultStore)}>
            <SignUp />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        const displayName = getByTestId('display-name')
        const signUpEmail = getByTestId('sign-up-email')
        const signUpPwd = getByTestId('sign-up-pwd')
        const signUpCnfPwd = getByTestId('sign-up-cnf-pwd')
        const signUnButton = getByTestId('sign-up-btn')
        fireEvent.change(displayName, { target: { value: 'test' } })
        fireEvent.change(signUpEmail, { target: { value: 'testemail' } })
        fireEvent.change(signUpPwd, { target: { value: 'testpwd' } })
        fireEvent.change(signUpCnfPwd, { target: { value: 'testpwd' } })
        fireEvent.click(signUnButton)

    })
})
