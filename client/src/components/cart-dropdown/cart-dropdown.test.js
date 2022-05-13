import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartDropdown from './cart-dropdown.component';


const defaultStore = {
    cart: {
        cartItems: [{
            id: 19,
            imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
            name: "Blue Jean Jacket",
            price: 90,
            quantity: 1
        }],
        hidden: false,
        payment: null
    }
};

const mockStore = configureStore();

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('CartDropdown component', () => {

    it('should render CartDropdown', () => {

        const { asFragment, getByTestId, getByText } = render
            (<Provider
                store={mockStore(defaultStore)}
                history={mockHistoryPush}
            >
                <CartDropdown />
            </Provider>)
        expect(asFragment()).toMatchSnapshot();
        expect(getByText('GO TO CHECKOUT')).toBeInTheDocument();
        const checkoutButton = getByTestId('checkout-button');
        fireEvent.click(checkoutButton);
    })


})
