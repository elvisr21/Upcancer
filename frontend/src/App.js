import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Home,About,Contact,Services,Login,Signup} from './pages/'
import React, { useState } from 'react';
function App() {
    const[Signed,isSign]=useState(false)
  if (Signed==false){
      return (
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/Signup" exact component={Signup}/>
            <Route path="/Signin" exact component={Login}/>
            <Route path="/services" exact component={Services}/>
          </Switch>

        </Router>
      );
  }
}

export default App;
