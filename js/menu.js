import {guName} from "./lsStorage.js";
import { clearUser } from "./lsStorage.js";
import { cartItems } from "./cart.js";




export default function menu(){

    const { pathname } = document.location;
    
    let userName = guName();
    
    const menuSection = document.querySelector(".menu-c");

    let aLink = `<a href="/login.html" class="${pathname === "/login.html" ? "active" : ""}">Login <i class="fas fa-user"></i></a>`;

    if(userName){
        aLink = `
        <a href="/addproduct.html" class="${pathname === "/addproduct.html" ? "active" : ""}">Add product</a>
        <a>Hello ${userName}</a>
        <button id="logout" class="logoutBtn">Logout</button>
        `
    }

   menuSection.innerHTML = `
   <div class="menu">
   <a href="/index.html" class="${pathname === "/" || pathname ==="/index.html" ? "active" : ""}">Home</a>
   <a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
   <a href="/cart.html" class="${pathname === "/cart.html" ? "active" : ""}"><i class="fas fa-shopping-cart">cart</i></a>
   
   ${aLink}

   </div>`


  logOUT();
  cartItems();
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
     


