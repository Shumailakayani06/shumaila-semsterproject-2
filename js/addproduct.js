import menu from "./menu.js";
import { gToken } from "./lsStorage.js";
import { url } from "../components.js";



menu();

const from = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".form-message");


from.addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault();
    message.innerHTML= "";

    const titleV = title.value.trim();
    const priceV = parseFloat(price.value);
    const descriptionV = description.value.trim();
    console.log("pricevalue", priceV)

    if(titleV.length === 0 || priceV.length === 0 || isNaN(priceV) || descriptionV.length === 0){
       return message.innerHTML = "Please enter proper values";
    }

    addProduct(titleV, priceV, descriptionV);

}


async function addProduct(title, price, description){
    const URL = url + "products";
    console.log(URL);
    

    const data = JSON.stringify({title: title, price: price, description: description})

    const token = gToken();

    const option = {

        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }

    try{
       const response = await fetch(URL, option);
       const json = await response.json();
       console.log(json);
    }
    catch(error){
console.log(error)
    }
}