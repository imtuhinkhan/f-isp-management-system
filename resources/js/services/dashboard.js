import Axios from 'axios'
import {public_url} from '../config'

export const topCard=async()=>{
    return await Axios.get(public_url+'api/dashboard').then((res)=>{
        return res;
     }).catch(e=>console.log(e));
 }

 export const getBarGraphData=async()=>{
    return await Axios.get(public_url+'api/getBarGraphData').then((res)=>{
        return res;
     }).catch(e=>console.log(e));
 }

 