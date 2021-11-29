import { getProducts } from "../cartFunction.js";

const productCart = getProducts();

const cartProducts = document.querySelector(".cart-products");
console.log(cartProducts);


const allProducts = document.querySelector(".all-products");


productCart.forEach(product => {
    allProducts.innerHTML = "";
    
    allProducts.innerHTML += `
    <div>
    <h2>${product.title}</h2>
    <h2>is added to cart</h2>
    </div>
    `

  
   
});











//  function emptyCart(){
//     if(allProducts.innerHTML = ""){
   
//         console.log("emptyyyyy")
        
//     }
//     }

//     emptyCart();


