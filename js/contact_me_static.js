$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

document.addEventListener("DOMContentLoaded", function() {
    const product = new URLSearchParams(window.location.search).get('product');
    if (product) {
            const productCapitalized = product.charAt(0).toUpperCase() + product.slice(1)
            document.querySelector('#message').value = `Hello, I would like to purchase the original painting for ${productCapitalized}.`;
    }
});