import { url } from "../components.js";
import { getToken } from "./addproduct.js";
import deleteB from "./delete.js";
import menu from "./menu.js";
const allProducts = document.querySelector(".all-products");
const urlPro = url + "products";

const qString = document.location.search;
const newParam = new URLSearchParams (qString);
const getId = newParam.get("id");

menu();


const allPro = "http://localhost:1337/products/" + getId ;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const inputId = document.querySelector("#id");
const message = document.querySelector(".form-message");



(async function(){
    try {
        const response = await fetch(allPro);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        inputId.value = details.id;
       
      deleteB(details.id);
       
    }catch (error){
        console.log(error);
    }
})();


form.addEventListener("submit", submitEditForm);

function submitEditForm(event){
    event.preventDefault();
    message.innerHTML= "";

    const titleV = title.value.trim();
    const priceV = parseFloat(price.value);
    const descriptionV = description.value.trim();
    const idV = inputId.value;
    

    if(titleV.length === 0 || priceV.length === 0 || isNaN(priceV) || descriptionV.length === 0){
       return message.innerHTML = "Please enter proper values";
    }

    editProduct(titleV, priceV, descriptionV, idV);
}

async function editProduct(title, price, description, id){
    const editUrl = url + "products/" + id;
    const data = JSON.stringify({title: title, price: price, description: description})

    const token = getToken();
    const option = {

        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " +`${token}`
        }
    }

    try{
        const response = await fetch(editUrl, option);
        const json = await response.json();
        console.log(json)

        if(json.updated_at){
            message.innerHTML ="Products Updated";
        }

    }
    catch(error){
console.log(error);
    }
}