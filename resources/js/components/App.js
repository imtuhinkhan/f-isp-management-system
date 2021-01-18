import React from 'react';
import ReactDOM from 'react-dom';
import "../../css/app.css"
import { BrowserRouter as Router } from "react-router-dom";
import AdminRouter from '../AdminRouter'
import store from '../store/index'
import {Provider} from 'react-redux'
import Axios from 'axios'
import {public_url} from '../config'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
let token = Cookies.get('token');
const jwt_secret = 'jFB5cLtm8srdbmRMoD3da3cHV3dPHJ2QhByCOpMzBb3uqz68btc7S2iyb8KFUo2e'
if(token){
  jwt.verify(token,jwt_secret,(err, decoded)=>{
    if(err){
      token=null;
      Cookies.remove('token')
    }
    if(decoded.iss!=public_url+'api/auth/login'){
      token=null;
      Cookies.remove('token')
    }
    console.log(decoded)
  });
}
const render=()=>{
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
}
if(token){
  Axios.post(public_url+'api/auth/me').then((res)=>{
    store.dispatch({type:'SET_LOGIN',payload:res.data})
    render();
  }).catch((e)=>{
    store.dispatch({type:'SET_LOGOUT'})
    render()
  });
}else{
  render()
}

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


