import React from 'react';
import { render } from '@testing-library/react';
import SignInAndSignUpPage from './sign-in-and-sign-up.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
};
const mockStore = configureStore();

describe('SignInAndSignUpPage component', () => {
    it('should render SignInAndSignUpPage', () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <SignInAndSignUpPage />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})

