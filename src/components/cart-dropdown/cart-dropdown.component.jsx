import React from 'react';
import { connect } from 'react-redux';
import {CartDropdownContainer, CartItemsContainer, CartEmptyMessageContainer} from './cart-dropdown.styles.jsx';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer >
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (<CartEmptyMessageContainer>Your cart is empty</CartEmptyMessageContainer>
                )}

        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }
        }>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));