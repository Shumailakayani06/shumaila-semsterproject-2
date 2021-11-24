export function getProducts(){
    const cartItems = localStorage.getItem("cart")

    if(!cartItems){
        return [];
    }else {
        return JSON.parse(cartItems);
    }
}