import Axios from 'axios'
import {public_url} from '../config'
import Cookies from 'js-cookie'
import { useHistory  } from "react-router-dom";
export const postLogin=(data)=>{
    return  Axios.post(public_url+'api/auth/login',data).then((res)=>{
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.access_token;
        return res;
     }).catch(e=>console.log(e));
 }

 export const logout=async()=>{
    return await Axios.post(public_url+'api/auth/logout').then((res)=>{
        Cookies.remove('token');
        Cookies.remove('user');
        return res;
     }).catch(e=>console.log(e));
 }

 export const removeToken=async()=>{
    return await Axios.post(public_url+'api/auth/me').then((res)=>{       
        return res;
     }).catch((e)=>{
        if(e.response.status==401){
            console.log(e.response.status);
            // Cookies.remove('token');
            // Cookies.remove('user');
            return 0;
        }
    });     
 }