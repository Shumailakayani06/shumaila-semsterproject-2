import { getProducts } from "../cartFunction.js";
import menu from "./menu.js";

const productCart = getProducts();

const cartProducts = document.querySelector(".cart-products");

export const emptyCart = document.querySelector(".empty-cart");


const allProducts = document.querySelector(".all-products");

menu();
if (productCart.length === 0){
    allProducts.innerHTML = "empty cart";
}

productCart.forEach(product => {
    
    
    allProducts.innerHTML += `
    <div class="cart-div">
    IMAGE GOSE HERE
    <h2>${product.title}</h2>
    <h2>${product.price}</h2>
    
    </div>
    `
    console.log(product);

  
   
});














