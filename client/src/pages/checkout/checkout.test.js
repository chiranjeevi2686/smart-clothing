import React from 'react';
import { render } from '@testing-library/react';
import CheckoutPage from './checkout.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
    cart: {
        cartItems: [{
            id: 19,
            imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
            name: "Blue Jean Jacket",
            price: 90,
            quantity: 1
        }]},
    total:2,
    payment:12
};
const mockStore = configureStore();
describe('CheckoutPage component', () => {
    it('should render CheckoutPage', () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <CheckoutPage />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})

