import { getProducts } from "../cartFunction.js";

const productCart = getProducts();

const allProducts = document.querySelector(".all-products");
console.log(allProducts);

productCart.forEach(product => {
    
    allProducts.innerHTML += `
    <div>
    <h2>${product.title}</h2>
    <h2>is added to cart</h2>
    </div>
    `
    
});