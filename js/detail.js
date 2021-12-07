import { url } from "../components.js";
import { getProducts } from "../cartFunction.js";
import menu from "./menu.js";
const allProducts = document.querySelector(".all-products");
const urlPro = url + "products";



const qString = document.location.search;
const newParam = new URLSearchParams (qString);
const getId = newParam.get("id");
//console.log(getId)

//if(!iD){window.location = "index.html"};


const allPro = "http://localhost:1337/products/" + getId ;
if(getId != null){
    getData();
}


menu();

async function getData(){

    try{
        const response = await fetch(allPro);
        const details = await response.json();
        console.log(details);
        
        //console.log(details);

        allProducts.innerHTML = "";
        allProducts.innerHTML += `
        <div class"cartdiv">
        <h2>
        ${details.title}
        </h2>
        IMAGE GOES HERE
        <p>${details.description}</p>
        <p>${details.price}</p>
        <button class="cartbtn" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}" >add to cart</button>
        <a href="/edit.html?id=${details.id}">EDIT</a>
        </div>
        `
    }catch(error){
        console.log("error");
    }

    //click event
    const cartBtn = document.querySelectorAll(".cartbtn");
//console.log(cartBtn);
cartBtn.forEach((button) => {
    button.addEventListener("click", btnfunction);
  })
}

//handle button function 
 function btnfunction(){
    
    //event.target.classsList.toggle(".")

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
  

    console.log("price", price);

   const currentCart =  getProducts();
  

   const itemExist = currentCart.find(function(cartItems){
       return cartItems.id === id;
   })
   //IF item doesnt exist then add otherwise remove

   if(itemExist === undefined){

    const product = {id: id, title: title, price: price};

    currentCart.push(product);
 
    saveItems(currentCart);
   }else {
       const newarray = currentCart.filter(item =>item.id !== id);
       saveItems(newarray);
   }


   console.log("itemExists" , itemExist);

}




//save items in LS
function saveItems(cartItems){
    localStorage.setItem("cart", JSON.stringify(cartItems));
}



getData();