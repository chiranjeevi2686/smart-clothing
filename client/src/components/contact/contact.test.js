import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ContactContainer from './contact.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = 
    {
        displayName: '',
        name: '',
        email: '',
        message: ''
    };
const mockStore = configureStore();
describe('Collection contact component', () => {
    it('should render contact details', async () => {
        const { asFragment, getByTestId, getByText } = render(<Provider store={mockStore(defaultStore)}>
            <ContactContainer />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        const displayNameInput = getByTestId('display-name');
        fireEvent.change(displayNameInput, {target: {value:'testDisplay'}})
        expect(displayNameInput.value).toEqual('testDisplay')

    })
})
