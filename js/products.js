import { url } from "../components.js";
import menu from "./menu.js";

const products = document.querySelector(".featured-products");
const searchBar = document.getElementById('searchBar');
const urlPro = url + "products";
let data=[];




//filter searchbox



// fetch featured products

menu();

async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        console.log(data);

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
        <p>${item.price}</p>
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

        if(searchValue.length <=1){
            console.log("hello this is empty");
            
        }
    })
    console.log(filteredProducts);
    data = filteredProducts;
    
    displayProducts(filteredProducts);
    
}



getProducts();

