import axios from 'axios'
export const signin= async (user)=>{
    return axios.post("http://localhost:8080/authenticate",user);
}
const register= async(user)=>{
    return axios.post("http://localhost:8080/createuser",user);
}
export const authenticate=(object,type)=>{
    if(type==="register"){
        return(register(object))
    }
    else if (type==="signin"){
        return(signin(object))        
    }
}

