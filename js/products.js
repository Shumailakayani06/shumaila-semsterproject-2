import { url } from "../components.js";

import menu from "./menu.js";

const products = document.querySelector(".featured-products");
const searchBar = document.getElementById('searchBar');
const urlPro = url + "products";
let data=[];

menu();
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

// http://localhost:1337/uploads/haircare_b1a023a6cf.webp

// display featured products
 function displayProducts() {
// console.log(data[5].image.url);
console.log(data);
    products.innerHTML = "";

    data.forEach((item) =>{
        
        products.innerHTML += `
        
        <div class="pDiv">
        <a href="/detail.html?id=${item.id}">
        <img src='http://localhost:1337${item.image.url}'/> 
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


