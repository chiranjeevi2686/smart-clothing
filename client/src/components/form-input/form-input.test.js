import React from "react";
import { render } from '@testing-library/react';
import FormInput from './form-input.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = 
    {
        name:'email',
        type:'email',
        value:'test@email.com',
        handleChange:'true',
        label:'email'
    };
const mockStore = configureStore();
describe('FormInput component', () => {
    it('should render FormInput', async () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <FormInput />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})
