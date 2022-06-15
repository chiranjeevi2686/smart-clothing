import React from 'react';
import { render } from '@testing-library/react';
import SmartAlert from './alert.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
};
const mockStore = configureStore();
describe('SmartAlert component', () => {
    it('should render SmartAlert', () => {
        const { asFragment, getByText } = render(<Provider store={mockStore(defaultStore)}>
            <SmartAlert varient='success' message='Your payment is successful'/>
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        expect(getByText('Your payment is successful')).toBeInTheDocument();
    })
})

