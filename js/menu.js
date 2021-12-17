import {guName} from "./lsStorage.js";
import { clearUser } from "./lsStorage.js";
// import { cartItems } from "./cart.js";




export default function menu(){

    const { pathname } = document.location;
    
    let userName = guName();
    
    const menuSection = document.querySelector(".menu-c");
    const editbtn = document.querySelector(".editBtnDiv")

    let aLink = `<a href="/login.html" class="${pathname === "/login.html" ? "active" : ""}">Login <i class="fas fa-user"></i></a>`;

    if(userName){
        aLink = `
        <li><a href="/addproduct.html" class="${pathname === "/addproduct.html" ? "active" : ""}">Add product</a></li>
        <li><a>Hello ${userName}</a></li>
        <li><button id="logout" class="logoutBtn">Logout</button></li>
        `
    }

   menuSection.innerHTML = `
   <nav class="menu">
   <div class="bslogo">Beauty Store</div>
   <ul class="nav-links">
   <li>
   <a href="/index.html" class="${pathname === "/" || pathname ==="/index.html" ? "active" : ""}">Home</a>
   </li>
   <li>
   <a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
   </li>
   <li>
   <a href="/cart.html" class="${pathname === "/cart.html" ? "active" : ""}"><i class="fas fa-shopping-cart"></i></a>
   </li>
   ${aLink}
   </ul>

   <div class="burger">
   <div class="line1"></div>
   <div class="line2"></div>
   <div class="line3"></div>
   </div>

   </nav>`

  


  logOUT();
//   cartItems();
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
     

 


