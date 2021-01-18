import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {Home,About,Contact,Services,Navbar} from './pages/NotSignedIn'
import {Dashboard,SideNavbar} from './pages/SignedIn'
import {authenticate } from './functions'
import React, { useState } from 'react';
 
function App() {
  const [Signed,isSign]=useState({
    Signedin:false,
    username:""
  });
  console.log(Signed);
  const Signin=(props)=>{
    const SignInUser=(event)=>{
      event.preventDefault();
      var data={
        username:event.target[0].value,
        password:event.target[1].value,
        type:"signin"
      }
      isSign(authenticate(data));
    }
    return (
      <div className="Login">
          <form onSubmit={SignInUser}>
              <p>Enter your Username:</p>
              <input type="text"/>
              <p>Enter your Password:</p>
              <input type="password"/>
              <input type="submit"/>
          </form>
    </div>
    );
  }
const Signup=()=>{
  const RegisterUser=(event)=>{
    event.preventDefault();
      var data={
        name:event.target[0].value,
        username:event.target[1].value,
        email:event.target[2].value,
        password:event.target[3].value,
        type:"register"
      }
      isSign(authenticate(data));
  }
  return (
    <div className="Register">
        <form onSubmit={RegisterUser}>
        <p>Enter your Name:</p>
        <input type="text"/>
        <p>Enter your Username:</p>
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
  if (Signed.Signedin===false || Signed.username===""){
      return (
          <Router>
              <Navbar/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin} />
                <Route path="/services" exact component={Services}/>
              </Switch>
            </Router>
          );
      }
  else{
      return(
        <Router>
          <Redirect to="/"/>
          <SideNavbar/>
          <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin} />
                <Route path="/services" exact component={Services}/>
              </Switch>
          <h1>welcome, {Signed.username}</h1>
        </Router>
        
      )
  }
}

export default App;
