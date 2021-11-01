import Reacct from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStipe = price * 100;
    const publishableKey = '';


    const onToken = token => {
        console.log(token);
        alert('PAYMENT SUCCESSFUL')
    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='Taylor Gang Ltd.'
            billingAddress
            shippingAddres
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStipe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton