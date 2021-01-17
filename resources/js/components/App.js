import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/app.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminRouter from '../AdminRouter'
import axios from 'axios'
import Cookies from 'js-cookie'

function App() {
    return (
        <>
        <Router>  
          <AdminRouter/>              
        </Router> 
            
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app')); 
}
