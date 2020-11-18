import React from 'react';
import { CartItemContainer, CartItemImage, ItemDetailsContainer, ItemDetailsName, ItemPrice } from './cart-item.styles.jsx';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='cartImage' />
        <ItemDetailsContainer>
            <ItemDetailsName>{name}</ItemDetailsName>
            <ItemPrice>
                {quantity} * ${price}
            </ItemPrice>

        </ItemDetailsContainer>
    </CartItemContainer>
);
export default CartItem;