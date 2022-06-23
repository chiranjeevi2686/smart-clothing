import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './homepage.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
    directory: {
        sections: [{
            id: 1,
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            linkUrl: "shop/hats",
            size: "",
            title: "hats"
        }]
    }
};
const mockStore = configureStore();
describe('HomePage component', () => {
    it('should render HomePage', () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <HomePage />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})

