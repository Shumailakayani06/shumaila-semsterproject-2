import { url } from "../components.js";
const allProducts = document.querySelector(".all-products");
const urlPro = url + "products";


const qString = document.location.search;
const newParam = new URLSearchParams (qString);
const getId = newParam.get("id");
console.log(getId)

//if(!iD){window.location = "index.html"};

console.log(typeof getId);
const allPro = "http://localhost:1337/products/" + getId ;
if(getId != null){
    getData();
}




async function getData(){

    try{
        const response = await fetch(allPro);
        const details = await response.json();
        
        console.log(details.title);

        allProducts.innerHTML = "";
        allProducts.innerHTML += `
        <div>
        <h2>
        ${details.title}
        </h2>
        </div>
        `




        
        

        

    }catch(error){
        console.log("error");
    }
}

getData();