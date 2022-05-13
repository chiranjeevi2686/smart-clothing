import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartIcon from './cart-icon.component';

const defaultStore = {
    cart: {
        cartItems: [{
            id: 19,
            imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
            name: "Blue Jean Jacket",
            price: 90,
            quantity: 1
        }],
        hidden: true,
        payment: null
    }
};
const mockStore = configureStore();

describe('CartIcon component', () => {

    it('should render cart icon', () => {

        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <CartIcon />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        const cartIconButton = screen.getByTestId('shopping-icon');
        fireEvent.click(cartIconButton);
    })
})
