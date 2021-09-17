import React from 'react';
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles.jsx';
import { useDispatch } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const dipatch = useDispatch();

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className='arrow' onClick={() => dipatch(removeItem(cartItem))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dipatch(addItem(cartItem))}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => dipatch(clearItemFromCart(cartItem))}>
                &#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;