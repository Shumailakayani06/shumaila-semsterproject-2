import menu from "./menu.js";
import { gToken } from "./lsStorage.js";
import { url } from "../components.js";





menu();

//Hamburger menu 

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', ()=>{

        //toggle 
        nav.classList.toggle('nav-active')

            //animation

navLinks.forEach((link,index) =>{
    if(link.style.animation){
        link.style.animation = ""
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
    }
  })

  //burger animation
  burger.classList.toggle('toggle');
    })


}

navSlide();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.getElementById("img1");

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
    console.log(imageV);

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





async function addProduct(title, price, description, image){
    console.log("http://localhost:1337/uploads/" + image);
    // console.log(image.attributes[1].textContent);
    const URL = url + "products";
    
  
     
     const imageSplit = image.split("\\");
    //  let newimage =imageSplit[2];
     let newimage =  "http://localhost:1337/uploads/" + imageSplit[2];

     console.log(image); 

    const data = JSON.stringify(
        {title: title,
        price: price,
         description: description,
         image_url: image})

         console.log(data);

    // let formData = new FormData();
    // formData.append("img", image);
   
    const option = {

        method: "POST",
        body: data, 
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " +`${token}`
        }
    }

    //"Content-Type": "multipart/form-data",

    try{
       const response = await fetch(URL , option);
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