define(
    [
        'jquery',
        'mage/validation',,
        'Magento_Checkout/js/model/full-screen-loader'
    ],
    function ($, $v, fullScreenLoader) {
        'use strict';

        return {

            /**
             * Validate checkout agreements
             *
             * @returns {Boolean}
             */
            validate: function () {
                fullScreenLoader.startLoader();

                var promise = new Promise(function (resolve, reject) {
                    var params = {
                        isChecked: true
                    };
                    $.ajax({
                        url: "/checkout-validation/stock/validate", // or you backend url
                        data: params,
                        type: "POST",
                        showLoader: true,
                        async: false //This is required so that it wait for the response
                    }).done(
                        function (returnResponse) {
                            resolve(returnResponse);
                        }
                    ).fail(
                        function (response) {
                            reject("Validation error!");
                        }
                    ).always(
                        function () {
                            fullScreenLoader.stopLoader();
                        }
                    );
                });

                var validate = function (promise) {
                    promise.then(function (response) {
                        // your logic here
                        return response.status;
                    }, function (error) {
                        return false;
                    })
                };

                validate(promise);
            }
        };
    }
);