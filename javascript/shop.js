function addProd(){
  var store = document.getElementById("storeList");
  var cart = document.getElementById("cartList");
  var prod = store.options[store.selectedIndex];

  cart.appendChild(prod).clone();
}

function removeProd(){
  var store = document.getElementById("storeList");
  var cart = document.getElementById("cartList");
  var prod = cart.options[cart.selectedIndex];

  store.appendChild(prod);
}

function buildArray(){
  var cart = document.getElementById("cartList");
  var cartLeng = cart.options.length;

  for(i = 0; i < cartLeng; i++){

  }
}
