//(function(){
//  $("#add").click(function(e){
//    var toCart = $("#storeList option:selected");
//    console.log(toCart);
//    if(toCart.length===0){
//      alert("Please select a product.");
//      e.preventDefault();
//    }

//    $("#cartList").append($(toCart).clone());
//  })
//}(jQuery));

function addProd(){
  var prods = document.getElementById("storeList");
  var cart = document.getElementById("cartList");
  var product = prods.options[prods.selectedIndex].text;

  cart.add(product);
}
