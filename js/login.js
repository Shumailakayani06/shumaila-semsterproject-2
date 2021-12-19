import { displaymessage } from "../components.js";
import { invalid } from "../components.js";
import { successfull } from "../components.js";
import { url } from "../components.js";
import { sToken, sUser } from "./lsStorage.js";
import menu from "./menu.js";

//////////////////////////////////////////////////////////////////////


const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-c");

//////////////////////////////////////////////////////////////////////

//calling menu funtion
menu();

//////////////////////////////////////////////////////////////////////

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

/* loader */
window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    
    loader.className += " hidden";
    
    })

//////////////////////////////////////////////////////////////////////

form.addEventListener("submit" , submitForm);

function submitForm(event){
    event.preventDefault();

    message.innerHTML = "";

    const usernameV = username.value.trim();
    const passwordV = password.value.trim();

    if(usernameV.length === 0 || passwordV.length === 0){
     return displaymessage();
    }

    login(usernameV, passwordV);
}

async function login(username, password){
    const urL = url + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password});

    const option = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    };
    try{
        const response = await fetch(urL, option);
        const json = await response.json();

        console.log(json);

        if(json.user){
            //successfull();

            sToken(json.jwt);
            sUser(json.user)

            location.href ="/products.html";
        }

        if(json.error){
             invalid();
        }
       
    }
    catch(error){
console.log(error);
    }
}