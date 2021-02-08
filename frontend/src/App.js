import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {Home,About,Contact,Services,Navbar} from './pages/NotSignedIn'
import {Dashboard,SideNavbar,TopNavbar,Chat,Report,Calendar,Signout} from './pages/SignedIn'
import {authenticate } from './functions'
import React, { useState } from 'react';
import { connect } from 'react-redux';


function App(props) {
    var state=props.Logged;
    const SignInUser=(event)=>{
        event.preventDefault();
        var data={
          email:event.target[0].value,
          password:event.target[1].value,
        }
        authenticate(data,"signin");
        props.dispatch({type:"Signed"});
    }
    const RegisterUser=(event)=>{
        event.preventDefault();
        var data={
          name:event.target[0].value,
          email:event.target[1].value,
          password:event.target[2].value,
        }
        authenticate(data,"register")
        props.dispatch({type:"Signed"});

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
    var redirect= window.location.href==="http://localhost:3000/signin" || window.location.href==="http://localhost:3000/register";
    return (
        <Router>
            {!state && <Navbar/>}
            {state && <TopNavbar/>}
            {state && <SideNavbar/>}
            <Switch>
                {!state && <Route path="/" exact component={Home}/> }
                {!state && <Route path="/about" exact component={About}/>}  
                {!state && <Route path="/contact" exact component={Contact}/>} 
                {!state && <Route path="/signup" exact component={Signup}/> } 
                {!state && <Route path="/signin" exact component={Signin} /> }
                {!state && <Route path="/services" exact component={Services}/>}

                
                {state && <Route path="/" exact component={Dashboard}/>} 
                {state && <Route path="/calendar" exact component={Calendar}/>} 
                {state && <Route path="/report" exact component={Report}/>} 
                {state && <Route path="/chat" exact component={Chat}/>} 
                {state && <Route path="/signout" exact component={Signout} />}
                {state && redirect && <Redirect to="/"/>}
            </Switch>
          </Router>
    );
    
}

export default connect(state=>{
    return({
      Logged:state.Logged,
      }
    );
  }
)(App);
