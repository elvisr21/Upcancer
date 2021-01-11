import React from 'react'

const axios = require('axios')

function SigninPage() {
    const  SigninSubmit=(event)=>{
        event.preventDefault();
        axios.get('http://localhost:8080/');
        axios({
                method:"post",
                url:'http://localhost:8080/',
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'content-type': 'text/json'
                },
                data:{
                    name:"name",
                    thing:"thing"
                }
        }).then(Response=>{
            console.log()
        });
    }
    return (
        <div>
            <form onSubmit={SigninSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SigninPage
