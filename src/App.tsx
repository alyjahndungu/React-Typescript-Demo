import React from 'react';
//import Login from './components/Login';
  import Register from './components/Register';
 import SideNav from './components/SideNav';
 import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     
    <div className="row">
        <div className="col-sm-4">
   <SideNav/>
        </div>
         <div className="col-sm-4">
   
    
           
           </div>
           <Router>
            <div className="col-sm-4">
           
            <Route exact path="/components" component={Register} />

            </div>
             </Router>
    </div>
       
    </div>
  );
}

export default App;
