if (document.querySelector('.product-quantity-changer input') != null) {
    const plus = document.querySelector('.product-quantity-changer .plus');
    const minus = document.querySelector('.product-quantity-changer .minus');
    const quantity_input = document.querySelector('.product-quantity-changer input');

    plus.addEventListener('click', () => {
        value = parseInt(quantity_input.value);
        value += 1;
        quantity_input.value = value;
    });
    minus.addEventListener('click', () => {
        value = parseInt(quantity_input.value);
        if (value != 0) {
            value -= 1;
            quantity_input.value = value;
        }
    });
}


