import React from "react";
import { render } from '@testing-library/react';
import Header from './header.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore =
{
    user: {
        currentUser: null
    },
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
describe('Header component', () => {
    it('should render Header', async () => {
        // const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
        //     <Header />
        // </Provider>)
        // expect(asFragment()).toMatchSnapshot();
    })
})
