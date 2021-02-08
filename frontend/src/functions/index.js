import axios from 'axios'
export const authenticate=(object,type)=>{
    /*var request={
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        url:"",
        data:object
    }
    if (type==="signin"){
        request.url="http://localhost:8080/authenticate";
    }
    else if(type==="register"){
        request.url="http://localhost:8080/createuser";
    }
    console.log(request)
    axios.post(request.url,request.data,{
        headers:{'Content-Type':'application/json'}
    }).then(res=>{
        console.log(res);
    })
    */
   const user = object;
console.log(user);
axios.post("http://localhost:8080/createuser",user, {headers: {}}).then(res => {
    console.log("success");
}).catch(err => {
    if (err.response) {
        let code = err.response.status;
        if (code===409) {
            alert("Account already exists");
        } else {
            alert("Something went wrong, try again");
        }
    } else {
        console.log("Server is unresponsive")
    }
})
    return({
        Signedin:true,
        username:"mike",
    })
}

