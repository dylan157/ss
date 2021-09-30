var stripe = Stripe('pk_test_51JeujzLZTwGCqIUMDDwFuWPPsqlZ9VX3utxN60qOcd5aqoEpLoE1tPymCCcc4OFIpbgOU0xOPDwLJpOyBPQe16n000pHtoBcIE');

var checkoutButton = document.querySelector('#checkout-button');
checkoutButton.addEventListener('click', function () {
  stripe.redirectToCheckout({
    lineItems: [{
      // Define the product and price in the Dashboard first, and use the price
      // ID in your client-side code.
      price: stripePriceId,
      quantity: 1
    }],
    mode: 'payment',
    successUrl: 'https://www.example.com/success',
    cancelUrl: 'https://www.example.com/cancel'
  });
});