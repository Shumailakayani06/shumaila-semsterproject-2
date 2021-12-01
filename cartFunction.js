




export function getProducts(){
    let cartItems = localStorage.getItem("cart")

    if(!cartItems){
     
        return [];
       

    }
    else {
        return JSON.parse(cartItems);
        
    }


}

