import { url } from "../components.js";
import menu from "./menu.js";

const products = document.querySelector(".featured-products");
const searchBar = document.getElementById('searchBar');
const urlPro = url + "products";
let data=[];
//////////////////////////////////////////////////////////////////////

//calling menu function
menu();

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


// fetch featured products
async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        
        
        displayProducts();

    }catch(error){
        console.log(error);
    }
}

//////////////////////////////////////////////////////////////////////

// display featured products
 function displayProducts() {
// console.log(data[5].image.url);
console.log(data);
    products.innerHTML = "";

    data.forEach((item) =>{
        
        products.innerHTML += `
        
        <div class="pDiv">
        <a href="/detail.html?id=${item.id}">
        
        <img src='${item.image_url}'/> 
        </a>
        <h3>${item.title}</h3>
        <p> ${item.price} Nok</p>
        <p> <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> 
        </p>
        </div> 
        `
    })
}


//////////////////////////////////////////////////////////////////////

//Search bar filter
searchBar.onkeyup = function (){
    //console.log(event);
    

    const searchValue = event.target.value.trim().toLowerCase();
    const filteredProducts = data.filter(function(item){
        if(item.title.toLowerCase().startsWith(searchValue)){
            return true;
        }

      
    })
    console.log(filteredProducts);
    data = filteredProducts;
    console.log(data.length);
    if(searchValue.length === 0){
        getProducts();
    }else{
        console.log(data.length);
        displayProducts(filteredProducts);
    }
    
  
}



getProducts();


