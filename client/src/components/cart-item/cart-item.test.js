import React from 'react';
import { render, screen } from '@testing-library/react';
import CartItem from './cart-item.component';

describe('CartItem component', () => {
    it('should render cart item component', () => {
        const itemProp = { imageUrl: 'www.test.com', price: '23', name: 'test', quantity: '1' }
        expect(render(<CartItem item={itemProp} />)).toMatchSnapshot();
    })
})

