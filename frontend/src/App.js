import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {Home,About,Contact,Services,Navbar,SignedIn,Register} from './pages/NotSignedIn'
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
                {!Logged["isLogged"] && <Route path="/services" exact component={Services}/>}
                {!Logged["isLogged"] && <Route path="/signin" exact component={()=><SignedIn func={signin} Logged={isLogged}/>}/>}
                {!Logged["isLogged"] && <Route path="/signup" exact component={()=><Register func={authenticate} Logged={isLogged} Signin={signin}/>}/>}

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
