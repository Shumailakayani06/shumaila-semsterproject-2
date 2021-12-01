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
            
            
            products.innerHTML += `
            
            <div class="pDiv">
            <a href="/featured.html?id=${item.id}"">
            <h2>${item.title}</h2>
            IMGAE GOES HERE
            
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