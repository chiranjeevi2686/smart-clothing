import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Directory from './directory.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore =
{
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
describe('Directory component', () => {
    it('should render directory', async () => {
        const { asFragment, getByTestId, getByText } = render(<Provider store={mockStore(defaultStore)}>
            <Directory />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
        // const displayNameInput = getByTestId('display-name');
        // fireEvent.change(displayNameInput, {target: {value:'testDisplay'}})
        // expect(displayNameInput.value).toEqual('testDisplay')

    })
})
