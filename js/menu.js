import {guName} from "./lsStorage.js";
import { clearUser } from "./lsStorage.js";




export default function menu(){

    const { pathname } = document.location;
    
    let userName = guName();
    
    const menuSection = document.querySelector(".menu-c");

    let aLink = `<a href="/login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if(userName){
        aLink = `
        <a href="/addproduct.html" class="${pathname === "/addproduct.html" ? "active" : ""}">Add product</a>
        <button id="logout">Logout ${userName}</button>`
    }

   menuSection.innerHTML = `
   <div class="menu">
   <a href="/index.html" class="${pathname === "/" || pathname ==="/index.html" ? "active" : ""}">Home</a>
   <a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
   <a href="/cart.html" class="${pathname === "/cart.html" ? "active" : ""}">Cart</a>
   ${aLink}

   </div>`


  logOUT();
}



    // LOG OUT SECTION

    export function logOUT() {

        const btn = document.querySelector("#logout");
    
        if(btn){
            btn.onclick = function () {
                const confirmLogOut = confirm("Log out?");
    
                if(confirmLogOut){
                    clearUser();
                    location.href="/index.html";
                }
            }
        }
     }
     


