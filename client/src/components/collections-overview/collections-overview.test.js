import React from "react";
import { render } from '@testing-library/react';
import CollectionsOverview from './collections-overview.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
    shop: {
        collections: {
            hats: {
                id: 1,
                items: [{
                    id: 1,
                    imageUrl: 'test-url',
                    name: 'test-name',
                    price: 10
                }],
                routeName: 'test',
                title: 'test-title'
            }
        },
        errorMessage: '',
        isFetching: false
    }
};
const mockStore = configureStore();
describe('Collection overview component', () => {
    it('should render collection overview', async () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <CollectionsOverview />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();

    })
})
