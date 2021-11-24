import { url } from "../components.js";

const products = document.querySelector(".featured-products");
const searchBar = document.getElementById('searchBar');
const urlPro = url + "products";
let data=[];




//filter searchbox



// fetch featured products

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
        
        <div>
        <a href="/detail.html?id=${item.id}"">
        <h2>${item.title}</h2>
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
    
    displayProducts(filteredProducts);
    
}



getProducts();

