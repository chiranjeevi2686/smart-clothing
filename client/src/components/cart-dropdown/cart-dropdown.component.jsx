import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartDropdownContainer, CartItemsContainer, CartEmptyMessageContainer } from './cart-dropdown.styles.jsx';
import { useHistory } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartItemsContainer >
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (<CartEmptyMessageContainer>Your cart is empty</CartEmptyMessageContainer>
                )}

            </CartItemsContainer>
            <CustomButton
                data-test-id='checkout-button'
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
                }>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    );
};
export default CartDropdown;