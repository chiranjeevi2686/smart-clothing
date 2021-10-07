import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HgOedKNue5JG4z7Tn3Qujei7mQ0IVokHUYKmFWBXoumql9tYoOMaZCj4f380QKArev81jMzgKHW2OQGZwwrTq4R00Gp1iVXM3';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response=>{
            alert('Payment successful')
        }).catch(error=>{
            console.log('Payment error:',JSON.parse(error));
            alert('Unfortunately payment was not successful, retry with correct payment details')
        })
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Smart Clothing'
            billingAddress
            shippingAddress
            image='https://i.ibb.co/RvwnBL8/pink-shirt.png'
            description={`your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};
export default StripeCheckoutButton;
