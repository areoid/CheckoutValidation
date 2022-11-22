define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Areoid_CheckoutValidation/js/model/checkoutValidation'
    ],
    function (Component, additionalValidators, checkoutValidation) {
        'use strict';
        additionalValidators.registerValidator(checkoutValidation);
        return Component.extend({});
    }
);