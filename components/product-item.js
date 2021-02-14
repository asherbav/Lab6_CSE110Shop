// product-item.js

let style = document.createElement('style');
style.textContent = `
  .price {
    color: green;
    font-size: 1.8em;
    font-weight: bold;
    margin: 0;
  }

  .product {
    align-items: center;
    background-color: white;
    border-radius: 5px;
    display: grid;
    grid-template-areas: 
    'image'
    'title'
    'price'
    'add';
    grid-template-rows: 67% 11% 11% 11%;
    height: 450px;
    filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
    margin: 0 30px 30px 0;
    padding: 10px 20px;
    width: 200px;
  }

  .product > button {
    background-color: rgb(255, 208, 0);
    border: none;
    border-radius: 5px;
    color: black;
    justify-self: center;
    max-height: 35px;
    padding: 8px 20px;
    transition: 0.1s ease all;
  }

  .product > button:hover {
    background-color: rgb(255, 166, 0);
    cursor: pointer;
    transition: 0.1s ease all;
  }

  .product > img {
    align-self: center;
    justify-self: center;
    width: 100%;
  }

  .title {
    font-size: 1.1em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title:hover {
    font-size: 1.1em;
    margin: 0;
    white-space: wrap;
    overflow: auto;
    text-overflow: unset;
  }
`

var product = document.createElement('li');
product.setAttribute('class','product');
product.innerHTML = `
  <img width=200>
  <p class="title"></p>
  <p class="price"></p>
  <button onclick="clickButton(event)">Add to Cart</button>
`

class ProductItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(product.cloneNode(true));
    this.shadowRoot.appendChild(style.cloneNode(true));

    this.shadowRoot.querySelector('img').src = this.getAttribute('img-url');
    this.shadowRoot.querySelector('img').alt = this.getAttribute('img-alt');
    
    this.shadowRoot.querySelector('.title').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('.price').innerHTML = this.getAttribute('price');
    this.shadowRoot.querySelector('button').value = this.getAttribute('id')
  }
}

customElements.define('product-item', ProductItem);