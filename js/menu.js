import {guName} from "./lsStorage.js";



export default function menu(){

    const { pathname } = document.location;
    
    let userName = guName();
    console.log(userName);
    const menuSection = document.querySelector(".menu-c");

    let aLink = `<a href="/login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if(userName){
        aLink = `
        <a href="/addproduct.html" class="${pathname === "/addproduct.html" ? "active" : ""}">Add product</a>
        <span> Hi ${userName}</span>`
    }

   menuSection.innerHTML = `
   <div class="menu">
   <a href="/index.html" class="${pathname === "/" || pathname ==="/index.html" ? "active" : ""}">Home</a>
   <a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
   <a href="/cart.html" class="${pathname === "/cart.html" ? "active" : ""}">Cart</a>
   ${aLink}

   </div>`
}



