var removeCartItemButtons = document.getElementsByClassName('btn-danger')
 
for (var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event){    //adauga un event pe buton si ii spune sa faca ceva
       var buttonClicked =  event.target;
       buttonClicked.parentElement.parentElement.remove();  //de ce "parentElement si nu numele clasei parinte???"
        updateCartTotal();
    })
 
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        
        var price = parseFloat(priceElement.innerText.replace('$', '')); 
        //innerText retine valoarea afisata in html pentru pret
        //parseFloat transf un string intr-un float, adica nr
        var quantity = quantityElement.value;

        total = total + ( price * quantity);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;


}