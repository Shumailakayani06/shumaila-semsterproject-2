import { url } from "../components.js";

const products = document.querySelector(".featured-products");
const searchBar = document.getElementById('searchBar');
const urlPro = url + "products";
let data=[];


//filter searchbox
searchBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value;
    const filteredData = data.filter(item =>{
        return (item.title.includes(searchString));
    })
    console.log(filteredData); 
  
    displayProducts(filteredData);
})


// fetch featured products

async function getProducts(){
    try{
        const response = await fetch(urlPro);
        data = await response.json();
        console.log(data);

        displayProducts(data);

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

getProducts();

