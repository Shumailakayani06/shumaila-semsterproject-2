const tKey = "token";
const uKey = "user";

export function sToken(token){
    stStorage(tKey, token);
}

export function gToken(){
    gfStorage(tKey);
}

export function sUser(user){
    stStorage(uKey, user);
}

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