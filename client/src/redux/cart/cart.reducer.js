import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    payment: null,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
                payment: null
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        case UserActionTypes.PAYMENT_SUCCESS:
            return {
                ...state,
                cartItems: [],
                payment: 'success'
            }
        case UserActionTypes.PAYMENT_FAILURE:
            return {
                ...state,
                cartItems: [],
                payment: 'fail'
            }
        default:
            return state;
    }
};
export default CartReducer;