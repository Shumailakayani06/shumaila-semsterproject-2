     import { url } from "../components.js";
     import { clearUser } from "./lsStorage.js";
     
     //Delete button for edit products

     import { getToken } from "./addproduct.js";

     export default function deleteB(id){
         const deleteSection = document.querySelector(".deleteproductButton");
         deleteSection.innerHTML = `
         <button type="button" class="deleteBtn"> Delete product</button>
         `;

         const button = document.querySelector("button.deleteBtn");

         button.onclick = async function(){
             console.log(id);

             const deleteConf = confirm("Are you sure you want to delete this product?");
             console.log(deleteConf);

             if(deleteConf){

             const idUrl = url + "products/" + id;

             const token = getToken();

             const option = {
                 method: "DELETE",
                 headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " +`${token}`
                }
             }
             try{

                const response = await fetch(idUrl, option);
                const json = await response.json();
                location.href = "/products.html";
                console.log(json);

             }
             catch(error){
                 console.log(error);
                 clearUser();
                 location.href = "/index.html";
             }
             }



         }
     }

