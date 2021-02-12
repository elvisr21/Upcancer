import axios from 'axios'
const signin=(user)=>{
    axios.post("http://localhost:8080/authenticate",user,{headers: {}})
    .then(res=>{
        document.cookie ="jwt="+res["data"]["jwt"];
        return true;
    }).catch(err => {
        return false;
    })
}
const register=(user)=>{
    axios.post("http://localhost:8080/createuser",user, {headers: {}}).then(res => {
        signin({"email":user['email'],"password":user['password']});
    }).catch(err => {
        if (err.response) {
            let code = err.response.status;
            if (code===409) {
                alert("Account already exists");
            } else {
                alert("Something went wrong, try again");
            }
        } 
        else {
            console.log("Server is unresponsive")
        }
    })
}
export const authenticate=(object,type)=>{
    console.log(object,type);
    if(type==="register"){
        register(object);
    }
    else if (type==="signin"){
        signin(object)
    }
        
    return({
        Signedin:true,
        username:"mike",
    })

}

