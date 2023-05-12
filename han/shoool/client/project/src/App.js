import './App.css';
import React from 'react';
import Register from './register';
import {Routes , Route,BrowserRouter as Router } from "react-router-dom"
import Login from './Login';
import Home from './Home';
const  App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
         <Routes>
       
      
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route> */}
          <Route path="/" exact Component={Login} >
           
          </Route>
             
          <Route path='/register' Component={Register}></Route>
          <Route path='/home' Component={Home}></Route>
          </Routes>
       </Router>
       
      </header>
    </div>
  );
}

export default App;
