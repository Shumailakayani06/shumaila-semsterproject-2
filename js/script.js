import { url } from "../components.js";
import menu from "./menu.js";

const products = document.querySelector(".featured-products");
const urlPro = url + "products";
let data=[];





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


/* loader */


window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })

// display featured products
async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        console.log(data);
        

        products.innerHTML = "";

        data.forEach((item) =>{
            if(item.featured === true){

                console.log(data[5].image.url);
                
            
            products.innerHTML += `
            
            <div class="pDiv">
            <a href="/detail.html?id=${item.id}"">
            <img src='http://localhost:1337${item.image.url}'/> 
            <h3>${item.title}</h3>
            <button>View product</button>
            </a>
            </div>
            
            `
            }
        })

        // <img src="${item.image}" alt="${item.title}"/>
            
       

    }catch(error){
        console.log(error);
    }
}

getProducts();

