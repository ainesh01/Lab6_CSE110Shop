// product-item.js

class ProductItem extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here


  }

  connectedCallback() {
    this.loadDOMElements();
  }


  renderCart() {
    document.getElementById('cart-count').innerText = window.localStorage.getItem('cartSize');
  }


  addToCart(buttonElement) {
    window.localStorage.setItem(this.getAttribute('id'), true);
    this.incrementCart();
    buttonElement.textContent = 'Remove';
    buttonElement.onclick = () => this.removeFromCart(buttonElement);
  }

  removeFromCart(buttonElement) {
    window.localStorage.removeItem(this.getAttribute('id'));
    this.decrementCart();
    buttonElement.textContent = 'Add';
    buttonElement.onclick = () => this.addToCart(buttonElement);
  }

  incrementCart() {
    window.localStorage.setItem('cartSize', Number(window.localStorage.getItem('cartSize')) + 1);
    this.renderCart();
  }

  decrementCart() {
    window.localStorage.setItem('cartSize', Number(window.localStorage.getItem('cartSize')) - 1);
    this.renderCart();
  }

  loadDOMElements() {
    this.attachShadow({ mode: 'open' });
    this.renderCart();

    const listElement = this.createList();

    this.createImage(listElement);
    this.createTitle(listElement);
    this.createPrice(listElement);
    this.createButton(listElement);

    const styleElement = this.addStyles();

    this.shadowRoot.append(listElement, styleElement);
  }



  createList() {
    const listElement = document.createElement('li')
    listElement.className = 'product';
    return listElement;
  }

  createImage(listElement) {
    const imgElement = listElement.appendChild(document.createElement('img'));
    imgElement.src = this.getAttribute('img');
    return imgElement;
  }

  createTitle(listElement) {
    const pTitleElement = listElement.appendChild(document.createElement('p'));
    pTitleElement.className = 'title';
    pTitleElement.textContent = this.getAttribute('title');
    return pTitleElement;
  }

  createPrice(listElement) {
    const pPriceElement = listElement.appendChild(document.createElement('p'));
    pPriceElement.className = 'price';
    pPriceElement.textContent = this.getAttribute('price');
    return pPriceElement;
  }

  createButton(listElement) {
    const buttonElement = listElement.appendChild(document.createElement('button'));
    const itemInCart = window.localStorage.getItem(this.getAttribute('id')) === null ? false : true;
    buttonElement.textContent = itemInCart ? 'Remove' : 'Add';


    buttonElement.onclick = () => itemInCart ? this.removeFromCart(buttonElement) : this.addToCart(buttonElement);

    return buttonElement;
  }



  addStyles() {
    const styleElement = document.createElement('link')
    styleElement.setAttribute('rel', 'stylesheet');
    styleElement.setAttribute('href', './styles/styles.css');
    return styleElement;
  }

}


customElements.define('product-item', ProductItem);