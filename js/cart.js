import { getProducts } from "../cartFunction.js";
import menu from "./menu.js";

//////////////////////////////////////////////////////////////
const productCart = getProducts();
const cartProducts = document.querySelector(".cart-products");
const cartTotal = document.querySelector(".cart-total")
export const emptyCart = document.querySelector(".empty-cart");
const allProducts = document.querySelector(".all-products");

//////////////////////////////////////////////////////////////

//calling menu function
menu();

//////////////////////////////////////////////////////////////
//Hamburger menu 
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{

        //toggle 
        nav.classList.toggle('nav-active')

            //animation

navLinks.forEach((link,index) =>{
    if(link.style.animation){
        link.style.animation = ""
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
    }
  })

  //burger animation
  burger.classList.toggle('toggle');
    })


}

navSlide();

/* loader */
window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })

//////////////////////////////////////////////////////////////

// if cart is empty show a msg "Your cart is empty"

if (productCart.length === 0){
    allProducts.innerHTML = "Your cart is empty";
}

//////////////////////////////////////////////////////////////

//shoow products in cart

productCart.forEach(product => {
    console.log(product.image)
    
    allProducts.innerHTML += `
    
    <div class="cart-div">
    <a href="/detail.html?id=${product.id}">
    <img src="${product.image}"/> 
    <h2>${product.title}</h2>
    <h2>${product.price} Nok</h2>
    </a>
    </div>
   

    `
    console.log(productCart);
});

//////////////////////////////////////////////////////////////

// show total amout in cart

let total = 0;

for(let i = 0; i < productCart.length; i++){
    let price = parseFloat(productCart[i].price);

    total += price;
}

cartTotal.innerHTML = "Total : " + total + " Nok ";




// export function cartItems(){
//     const cartNumb = document.querySelector('.fa-shopping-cart');
// console.log(cartNumb);

//     cartNumb.innerHTML = productCart.length;
// }














