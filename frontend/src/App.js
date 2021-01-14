import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Home,About,Contact,Services,Navbar} from './pages/NotSignedIn'
import React, { useState } from 'react';
 
function App() {
  const[Signed,isSign]=useState(false)
  if (Signed===false){
      const Signin=()=>{
        return <h1>Signin</h1>
      }
      const Signup=()=>{
        return <h1>Signup</h1>
      }
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

  }
}

export default App;
