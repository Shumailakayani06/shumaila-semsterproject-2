import { url } from "../components.js";
import menu from "./menu.js";

const featuredProducts = document.querySelector(".featured-products");
const urlPro = url + "products";



const qString = document.location.search;
const newParam = new URLSearchParams (qString);
const getId = newParam.get("id");
console.log(getId)

//if(!iD){window.location = "index.html"};

console.log(typeof getId);
const allPro = "http://localhost:1337/products/" + getId ;
if(getId != null){
    getFeatured();
}

menu();
async function getFeatured(){

    try{
        const response = await fetch(allPro);
        const details = await response.json();
        
        console.log(details.title);

        featuredProducts.innerHTML = "";
        featuredProducts.innerHTML += `
        <div>
        <h2>
        ${details.title}
        </h2>
        <h2>
        ${details.price}
        </h2>
        <h2>
        ${details.description}
        </h2>
 
        </div>
        `




        
        

        

    }catch(error){
        console.log("error");
    }
}

getFeatured();