import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartIcon from './cart-icon.component';


describe('CartIcon component', () => {
    const initialState = {
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
    let store
    it('should render cart icon', () => {
        store = mockStore(initialState);
       
        const {container} = render(<Provider store={store}>
            <CartIcon />
        </Provider>)
        expect(container).toMatchSnapshot();
        const cartIconButton = screen.getByTestId('shopping-icon');
        fireEvent.click(cartIconButton);
    })
})
