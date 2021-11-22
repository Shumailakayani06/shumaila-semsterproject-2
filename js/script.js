import { url } from "../components.js";

const products = document.querySelector(".featured-products");
const urlPro = url + "products";
let data=[];




// display featured products

async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        console.log(data);

        products.innerHTML = "";

        data.forEach((item) =>{
            
            products.innerHTML += `
            
            <div>
            <a href="/detail.html?id=${item.id}"">
            <h2>${item.title}</h2>
            </a>
            </div>
            
            `
        })
            
       

    }catch(error){
        console.log(error);
    }
}

getProducts();