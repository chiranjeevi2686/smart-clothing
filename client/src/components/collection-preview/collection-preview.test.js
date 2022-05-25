import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CollectionPreview from './collection-preview.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {

};
const mockStore = configureStore();
describe('Collection preview component', () => {
    it('should render collection preview', async () => {
        const items = [{ id: 1, imageUrl: 'www.test.com', price: '23', name: 'test' }]
        const title = 'testTitle'
        const { asFragment, getByText } = render(<Provider store={mockStore(defaultStore)}>
            <CollectionPreview title = {title} items = {items} />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        expect(getByText('TESTTITLE')).toBeInTheDocument();
    })
})
