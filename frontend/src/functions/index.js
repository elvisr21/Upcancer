import axios from 'axios'
export const authenticate=(object)=>{
    console.log(object);
    var url="http://localhost:8080/"
    axios.post(url,JSON.stringify(object))
    return({
        Signedin:true,
        username:"mike"
    })
}