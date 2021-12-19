import { url } from "../components.js";
import { getProducts } from "../cartFunction.js";
import menu from "./menu.js";

//////////////////////////////////////////////////////////////////////

const allProducts = document.querySelector(".all-products");
let breadbrumbsLink = document.querySelector(".breadcrumbs__link--active");
const urlPro = url + "products";
const qString = document.location.search;
const newParam = new URLSearchParams (qString);
const getId = newParam.get("id");

//////////////////////////////////////////////////////////////////////


const allPro = "http://localhost:1337/products/" + getId ;
if(getId != null){
    getData();
}

//////////////////////////////////////////////////////////////////////

//calling menu funtion
menu();

//////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////

/* loader */
window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })

let crumbs = "";

//get detail on one product

async function getData(){

    try{
        const response = await fetch(allPro);
        const details = await response.json();
        
        console.log(details.image.url)
        

        allProducts.innerHTML = "";
        allProducts.innerHTML += `
        <div class"cartdiv">
     
        <img src='http://localhost:1337${details.image.url}'/> 
        <h2>
        ${details.title}
        </h2>
        <p>${details.description}</p>
        <p>${details.price} Nok</p>
        <button class="cartbtn" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" data-image_url="http://localhost:1337${details.image.url}">Add to cart <i class="fas fa-shopping-cart"></i></button>
        <a href="/edit.html?id=${details.id}">Edit product</a>
        
        </div>
        `

        // crumbs += `${details.title}`;
        // breadbrumbsLink.innerHTML = crumbs;
console.log(details.image.url);
        
    }catch(error){
        console.log("error");
    }

    //click event
    const cartBtn = document.querySelectorAll(".cartbtn");
//console.log(cartBtn);
cartBtn.forEach((button) => {
    button.addEventListener("click", btnfunction);
  })
}

//handle button function 
function btnfunction(){
    
    //event.target.classsList.toggle(".")

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image_url;
  

    console.log("image", image);

   const currentCart =  getProducts();
  

   const itemExist = currentCart.find(function(cartItems){
       return cartItems.id === id;
   })
   //IF item doesnt exist then add otherwise remove

   if(itemExist === undefined){

    const product = {id: id, image: image, title: title, price: price};

    currentCart.push(product);
 
    saveItems(currentCart);
   }else {
       const newarray = currentCart.filter(item =>item.id !== id);
       saveItems(newarray);
   }


   console.log("itemExists" , itemExist);

}

//////////////////////////////////////////////////////////////////////


//save items in LS
function saveItems(cartItems){
    localStorage.setItem("cart", JSON.stringify(cartItems));
}



getData();