import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CheckoutItem from './checkout-item.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


const defaultStore = {
    cart: {
        cartItems: [{
            id: 20,
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
describe('Checkout item component', () => {
    it('should render checkout item', async () => {
        const itemProp = { id: 20, imageUrl: 'www.test.com', price: '23', name: 'test', quantity: '1' }
       // mockStore(defaultStore).dispatch = jest.fn();
       // const action = {payload: {id: 20, imageUrl: 'www.test.com', price: '23', name: 'test', quantity: '1'}, type: 'ADD_ITEM'}
        const { asFragment, getByTestId } = render(<Provider store={mockStore(defaultStore)}>
            <CheckoutItem cartItem={itemProp} />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        const addArrow = getByTestId('add-arrow');
        const removeArrow = getByTestId('remove-arrow');
        const removeButton = getByTestId('remove-button');
        expect(getByTestId('add-arrow')).toBeInTheDocument();
        fireEvent.click(addArrow);
        // await waitFor(()=>{
        //     expect(mockStore(defaultStore).dispatch).toHaveBeenCalledWith(action)
        // })
        //expect(mockDispatch).toHaveBeenCalledWith(yourAction);
        fireEvent.click(addArrow);
        fireEvent.click(removeArrow);
        fireEvent.click(removeButton);
        //TODO:need to fix
        //expect(removeButton).not.toBeInTheDocument();
    })
})

