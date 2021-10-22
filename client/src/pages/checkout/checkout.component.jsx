import React from 'react';
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, AlertContainer } from './checkout.styles';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, selectCartPayment } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import SmartAlert from '../../components/alert/alert.component';

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    const payment = useSelector(selectCartPayment);

    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>

            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }

            <TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>
            <StripeCheckoutButton price={total} />

            {payment && payment === 'success'
                ? <AlertContainer>
                    <SmartAlert varient='success' message='Your payment is successful' />
                </AlertContainer>
                : null}
            {payment && payment === 'fail'
                ? <AlertContainer>
                    <SmartAlert varient='danger' message='Unfortunately payment was not successful, retry with correct payment details' />
                </AlertContainer>
                : null}



        </CheckoutPageContainer>
    )
}

export default CheckoutPage;