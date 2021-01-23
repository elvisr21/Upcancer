import axios from 'axios'
export const authenticate=(object,type)=>{
    var url="";
    if (type==="signin"){
        url="http://localhost:8080/authenticate";
    }
    else if(type==="register"){
        url="http://localhost:8080/createuser";
    }
    var data=JSON.stringify(object);
    //var url="http://localhost:8080/createuser"
    //axios.post(url,data)
    return({
        Signedin:true,
        username:"mike",
    })
} 