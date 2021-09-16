import React from 'react';
import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount)
    const dispatch = useDispatch();

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

export default CartIcon;