import React from "react";
import { render, fireEvent } from '@testing-library/react';
import MenuItem from './menu-item.component';
import { screen } from '@testing-library/dom'

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('MenuItem component', () => {
    it('should render MenuItem', async () => {
        expect(render(<MenuItem title='test' imageUrl='' size='1' linkUrl='/test' history={mockHistoryPush} />)).toMatchSnapshot();
        const menuItem = screen.getByTestId('shop-menu-item');
        fireEvent.click(menuItem);
    })

})
