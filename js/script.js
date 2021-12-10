import { url } from "../components.js";
import menu from "./menu.js";

const products = document.querySelector(".featured-products");
const urlPro = url + "products";
let data=[];




// display featured products
menu();

async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        console.log(data);
        

        products.innerHTML = "";

        data.forEach((item) =>{
            if(item.featured === true){

                console.log(data[5].image);
            
            products.innerHTML += `
            
            <div class="pDiv">
            <a href="/featured.html?id=${item.id}"">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}"/>
            </a>
            </div>
            
            `
            }
        })
            
       

    }catch(error){
        console.log(error);
    }
}

getProducts();

