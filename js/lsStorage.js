const tKey = "token";
const uKey = "user";
// sToken = save Token
//stStorage = save to storage

export function sToken(token){
    stStorage(tKey, token);
}

// gTOken = get token
// gfStorage = get from storage
export function gToken(){
    gfStorage(tKey);
     
    
}

//sUser = save user
export function sUser(user){
    stStorage(uKey, user);
}

//guName = get user name
export function guName(){
    const user = gfStorage(uKey);

    if(user){
        return user.username;
    }

    return null;
}



export function stStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

 export function gfStorage(key){
    const value = localStorage.getItem(key); 

    if(!value){
        return [];
    }
    return JSON.parse(value);
    
}