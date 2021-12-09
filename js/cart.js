import { getProducts } from "../cartFunction.js";
import menu from "./menu.js";

const productCart = getProducts();

const cartProducts = document.querySelector(".cart-products");
const cartTotal = document.querySelector(".cart-total")

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

let total = 0;

for(let i = 0; i < productCart.length; i++){
    let price = parseFloat(productCart[i].price);

    total += price;
}

cartTotal.innerHTML = "Total" + total + "nok";














