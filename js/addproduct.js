import menu from "./menu.js";
import { gToken } from "./lsStorage.js";
import { url } from "../components.js";





menu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#img");
const message = document.querySelector(".form-message");
const createdProduct = document.querySelector(".created-product");


form.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    message.innerHTML= "";

    const titleV = title.value.trim();
    const priceV = parseFloat(price.value);
    const descriptionV = description.value.trim();
    const imageV = image.value.trim();
    

    if(titleV.length === 0 || priceV.length === 0 || isNaN(priceV) || descriptionV.length === 0|| imageV.length === 0){
       return message.innerHTML = "Please enter proper values";
    }

    addProduct(titleV, priceV, descriptionV, imageV);

}
// const token = await gToken();
export function getToken(){
    const value = localStorage.getItem("token"); 

    if(!value){
        return [];
    }
    return JSON.parse(value);
    
}
const token = getToken();
console.log(token);




async function addProduct(title, price, description, image){
    // console.log("http://localhost:1337/uploads/" + image);
    // console.log(image.attributes[1].textContent);
    const URL = url + "products";
    
    // C:\fakepath\haircare.webp
     
     const imageSplit = image.split("\\");
     let newimage ="http://localhost:1337/uploads/" + imageSplit[2];

     console.log(typeof image); 

    const data = JSON.stringify(
        {title: title,
             price: price,
              description: description, 
              image_url: newimage})

    
    const option = {

        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " +`${token}`
        }
    }

    try{
       const response = await fetch(URL, option);
       const json = await response.json();
       

       if(json.created_at){
           createdProduct.innerHTML = "New product created successfully";
           form.reset();
       }
    }
    catch(error){
console.log(error)
    }
}