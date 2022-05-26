import React from 'react';
import { render } from '@testing-library/react';
import StripeCheckoutButton from './stripe-button.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
    price: 10
};
const mockStore = configureStore();
describe('StripeCheckoutButton component', () => {
    it('should render StripeCheckoutButton', () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <StripeCheckoutButton />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})

