import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {Home,About,Contact,Services,Navbar} from './pages/NotSignedIn'
import {Dashboard,SideNavbar,TopNavbar,Chat,Report,Calendar,Signout} from './pages/SignedIn'
import {authenticate } from './functions'
import React, { useState } from 'react';


function App(props) {
    var state=false;
    //searches cookies for jwt
    for (var i=0; i< document.cookie.split(";").length;i++){
        if(document.cookie.split(";")[i].includes("jwt")){
          state=true;
        }
    }
    //true if cookie exist else false
    const [Logged,isLogged]=useState(state);
    
    const SignInUser=(event)=>{
        event.preventDefault();
        var data={
          "email":event.target[0].value,
          "password":event.target[1].value,
        }
        isLogged(authenticate(data,"signin"));
    }
    const RegisterUser=(event)=>{
        event.preventDefault();
        var data={
          "name":event.target[0].value,
          "email":event.target[1].value,
          "password":event.target[2].value,
        }
        isLogged(authenticate(data,"register"));
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
            {!Logged && <Navbar/>}
            {Logged && <TopNavbar/>}
            {Logged && <SideNavbar/>}
            <Switch>
                {!Logged && <Route path="/" exact component={Home}/> }
                {!Logged && <Route path="/about" exact component={About}/>}  
                {!Logged && <Route path="/contact" exact component={Contact}/>} 
                {!Logged && <Route path="/signup" exact component={Signup}/> } 
                {!Logged && <Route path="/signin" exact component={Signin} /> }
                {!Logged && <Route path="/services" exact component={Services}/>}

                
                {Logged && <Route path="/" exact component={Dashboard}/>} 
                {Logged && <Route path="/calendar" exact component={Calendar}/>} 
                {Logged && <Route path="/report" exact component={Report}/>} 
                {Logged && <Route path="/chat" exact component={Chat}/>} 
                {Logged && <Route path="/signout" exact component={Signout} />}
                {Logged && redirect && <Redirect to="/"/>}
                {window.location.href==="http://localhost:3000/signout" && [document.cookie ="jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"] &&<Redirect to="/"/>}
            </Switch>
          </Router>
    );
    
}

export default App;
