import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/app.css"
import { BrowserRouter as Router } from "react-router-dom";
import AdminRouter from '../AdminRouter'
import store from '../store/index'
import {Provider} from 'react-redux'

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
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app')); 
}
