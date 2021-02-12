import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {Home,About,Contact,Services,Navbar} from './pages/NotSignedIn'
import {Dashboard,SideNavbar,TopNavbar,Chat,Report,Calendar,Signout} from './pages/SignedIn'
import {authenticate,signin } from './functions'
import React, { useState } from 'react';


function App(props) {
    const [Logged,isLogged]=useState({"isLogged":false,"jwt":""});

    //searches cookies for jwt if Logged doesnt have it
    if(!Logged["isLogged"]){
        for (var i=0; i< document.cookie.split(";").length;i++){
            if(document.cookie.split(";")[i].includes("jwt")){
              isLogged({"isLogged":true,"jwt":document.cookie.split(";")[i].split("=")[1]})
              break
            }
        }
    }    
    //sends sign in request to backend and returns a promise
    const SignInUser=(event)=>{
        event.preventDefault();
        var data={
          "email":event.target[0].value,
          "password":event.target[1].value,
        }
        authenticate(data,"signin").then(res=>{
          document.cookie ="jwt="+res["data"]["jwt"];
          isLogged({
              "isLogged":true,
              "jwt":res["data"]["jwt"]
          });
        }).catch(err => {
            alert("Sign in failed");
        })
  
    }
    //sends register request to backend and 
    const RegisterUser=(event)=>{
        event.preventDefault();
        var data={
          "name":event.target[0].value,
          "email":event.target[1].value,
          "password":event.target[2].value,
        }
        authenticate(data,"register").then(res => {
            signin({"email":data['email'],"password":data['password']}).then(res=>{
              document.cookie ="jwt="+res["data"]["jwt"];
              isLogged({
                  "isLogged":true,
                  "jwt":res["data"]["jwt"]
              });
            }).catch(err => {
                isLogged ({
                    "isLogged":false,
                    "jwt":""
                });
            })
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
              alert("Server is unresponsive")
          }
      })

    }
    const Signin=(props)=>{
        return (
          <div className="Login">
              <form onSubmit={SignInUser}>
                  <p>Enter your email:</p>
                  <input type="text"/>
                  <p>Enter your Password:</p>
                  <input type="password"/>
                  <input type="submit"/>
              </form>
        </div>
        );
    }
    const Signup=()=>{
        
        return (
          <div className="Register">
              <form onSubmit={RegisterUser}>
              <p>Enter your name:</p>
              <input type="text"/>
              <p>Enter your Email:</p>
              <input type="email"/>
              <p>Enter your Password:</p>
              <input type="password"/>
              <input type="submit"/>`
              </form>
        </div>
        );
    }
    var redirect= window.location.href==="http://localhost:3000/signin" || window.location.href==="http://localhost:3000/signup";
    return (
        <Router>
            {!Logged["isLogged"] && <Navbar/>}
            {Logged["isLogged"] && <TopNavbar/>}
            {Logged["isLogged"] && <SideNavbar/>}
            <Switch>
                {!Logged["isLogged"] && <Route path="/" exact component={Home}/> }
                {!Logged["isLogged"] && <Route path="/about" exact component={About}/>}  
                {!Logged["isLogged"] && <Route path="/contact" exact component={Contact}/>} 
                {!Logged["isLogged"] && <Route path="/signup" exact component={Signup}/> } 
                {!Logged["isLogged"] && <Route path="/signin" exact component={Signin} /> }
                {!Logged["isLogged"] && <Route path="/services" exact component={Services}/>}

                
                {Logged["isLogged"] && <Route path="/" exact component={Dashboard}/>} 
                {Logged["isLogged"] && <Route path="/calendar" exact component={Calendar}/>} 
                {Logged["isLogged"] && <Route path="/report" exact component={Report}/>} 
                {Logged["isLogged"] && <Route path="/chat" exact component={Chat}/>} 
                {Logged["isLogged"] && <Route path="/signout" exact component={Signout} />}
                {Logged["isLogged"] && redirect && <Redirect to="/"/>}
                {window.location.href==="http://localhost:3000/signout" && [document.cookie ="jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"] &&<Redirect to="/"/>}
            </Switch>
          </Router>
    );
    
}

export default App;
