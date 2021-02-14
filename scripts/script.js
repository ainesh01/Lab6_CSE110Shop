// Script.js


window.addEventListener('DOMContentLoaded', async () => {

  const response = await fetch('https://fakestoreapi.com/products');
  console.log(response);
  const productJson = await response.json();
  console.log(productJson);
  window.localStorage.setItem('products', JSON.stringify(productJson));
  console.log(window.localStorage.getItem('products'));
  const productList = JSON.parse(window.localStorage.getItem('products'));
  const productElementList = document.getElementById('product-list');
  let product = '';
  productList.forEach((product) => {
    const productElement = document.createElement('product-item');
    productElement.setAttribute('id', product.id);
    productElement.setAttribute('img', product.image);
    productElement.setAttribute('title', product.title);
    productElement.setAttribute('price', product.price);
    productElementList.appendChild(productElement);
  });
  if (!window.localStorage.getItem('cartSize')) {
    window.localStorage.setItem('cartSize', 0)
    console.log(window.localStorage.getItem('cartSize'));
  }




});

