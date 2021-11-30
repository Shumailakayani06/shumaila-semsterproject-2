import { getProducts } from "../cartFunction.js";
import menu from "./menu.js";

const productCart = getProducts();

const cartProducts = document.querySelector(".cart-products");
console.log(cartProducts);
export const emptyCart = document.querySelector(".empty-cart");


const allProducts = document.querySelector(".all-products");

menu();


productCart.forEach(product => {
    allProducts.innerHTML = "";
    
    allProducts.innerHTML += `
    <div>
    IMAGE GOSE HERE
    <h2>${product.title}</h2>
    <p>${product.price}</p>
    
    </div>
    `

  
   
});











//  function emptyCart(){
//     if(allProducts.innerHTML = ""){
   
//         console.log("emptyyyyy")
        
//     }
//     }

//     emptyCart();


