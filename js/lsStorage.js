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



function stStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function gfStorage(key){
    const value = localstorage.getItem(key);

    if(!value){
        return [];
    }
    return JSON.parse(value);
}