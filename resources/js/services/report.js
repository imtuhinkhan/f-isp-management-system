import Axios from 'axios'
import {public_url} from '../config'
export const generateReport=async(data)=>{
    return await Axios.post(public_url+'api/report',data).then((res)=>{
        return res;
     }).catch(e=>alert(e.response.error));
 }

export const generateCollectionReport=async(data)=>{
    return await Axios.post(public_url+'api/billcollection/report',data).then((res)=>{
        return res;
     }).catch(e=>console.log(e));
 }
