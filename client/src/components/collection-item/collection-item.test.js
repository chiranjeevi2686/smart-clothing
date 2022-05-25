import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CollectionItem from './collection-item.component';
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
        }],
        hidden: false,
        payment: null
    }
};
const mockStore = configureStore();
describe('Collection item component', () => {
    it('should render collection item', async () => {
        const itemProp = { imageUrl: 'www.test.com', price: '23', name: 'test' }
        const { asFragment, getByTestId } = render(<Provider store={mockStore(defaultStore)}>
            <CollectionItem item={itemProp} />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        const addButton = getByTestId('add-cart-button');
        fireEvent.click(addButton);
    })
})
