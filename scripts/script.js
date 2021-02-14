// Script.js


window.addEventListener('DOMContentLoaded', async () => {

  const response = await fetch('https://fakestoreapi.com/products');
  console.log(response);
  const productJson = await response.json();
  console.log(productJson);
  window.localStorage.setItem('products', JSON.stringify(productJson));
  console.log(window.localStorage.getItem('products'));

});

