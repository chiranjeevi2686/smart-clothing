import React from "react";
import { render } from '@testing-library/react';
import CustomButton from './custom-button.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
};
const mockStore = configureStore();
describe('CustomButton component', () => {
    it('should render CustomButton', () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <CustomButton/>
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})