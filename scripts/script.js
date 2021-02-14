// Script.js
var itemCount = 0;
var shoppingCart = [];

myStorage = window.localStorage;

window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('products')) {
    console.log("Data fetched");
  } else {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => localStorage.setItem('products', JSON.stringify(data)));
  }
  
  var products = localStorage.getItem('products');
  JSON.parse(products).forEach(listProduct);

  loadCart();
});

//Loads and lists product-item
function listProduct(value) {
  var product = `<product-item img-url="${value.image}" img-alt="${value.title}" title="${value.title}" price="$${value.price}" id="${value.id}" >`
  document.getElementById('product-list').insertAdjacentHTML('beforeend', product);
}

//Cart item counting functionality
function clickButton(event) {
  //Adds item, increases item count, changes button text to remove from cart
  if (event.target.innerHTML == "Add to Cart") {
    alert('Added to Cart!')
    event.target.innerHTML = "Remove from Cart";

    itemCount += 1;
    document.getElementById("cart-count").innerHTML = itemCount;
    shoppingCart.push(event.target.value);
  } 
  //Removes item, decreases item count, changes button text to add to cart
  else {
    event.target.innerHTML = "Add to Cart";
    itemCount -= 1;
    document.getElementById("cart-count").innerHTML = itemCount;

    shoppingCart = shoppingCart.filter((item) => {
      return item !== event.target.value;
    });
  }

  localStorage.setItem('cart', JSON.stringify(shoppingCart));
}

function loadCart() {
  if (localStorage.getItem('cart')) {
    shoppingCart = JSON.parse(localStorage.getItem('cart'));

    itemCount = shoppingCart.length;
    document.getElementById("cart-count").innerHTML = itemCount;

    shoppingCart.forEach((id) => {
      document.getElementById(id).shadowRoot.querySelector('button').innerHTML = "Remove from Cart";
    });
  }
  
}