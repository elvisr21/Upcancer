import axios from 'axios'
export const authenticate=(object,type)=>{
    console.log(type);
    var url="";
    if (type==="signin"){
        url="http://localhost:8080/authenticate";
    }
    else if(type==="register"){
        url="http://localhost:8080/createuser";
    }
    //var url="http://localhost:8080/createuser"
    //axios.post(url,JSON.stringify(object))
    return({
        Signedin:true,
        username:"mike",
    })
} 