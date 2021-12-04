import { url } from "../components.js";
import menu from "./menu.js";

const products = document.querySelector(".featured-products");
const searchBar = document.getElementById('searchBar');
const urlPro = url + "products";
let data=[];


// fetch featured products

menu();

async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        console.log(data.length);
        
        displayProducts();

    }catch(error){
        console.log(error);
    }
}


// display featured products
 function displayProducts() {

    products.innerHTML = "";

    data.forEach((item) =>{
        
        products.innerHTML += `
        
        <div class="pDiv">
        <a href="/detail.html?id=${item.id}"">
        <h2>${item.title}</h2>
        <p>price: ${item.price}</p>
        IMAGE GOES HERE
        </a>
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

