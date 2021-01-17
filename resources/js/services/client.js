import Axios from 'axios'
import {public_url} from '../config'
import {removeToken} from './auth'

export const storeClient=async(data)=>{
    return await Axios.post(public_url+'api/client',data).then((res)=>{
        return res;
     }).catch(e=>console.log(e));
 }

 export const viewClient=async()=>{
    return await Axios.get(public_url+'api/client').then((res)=>{
        return res;
     }).catch((e)=>{
         if(e.response.status==401){
            return removeToken();
         }
     });
 }

 export const findClientById = async(id)=>{
    return await Axios.get(public_url+'api/client/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const updateClient = async(data,id)=>{
    return await Axios.put(public_url+'api/client/'+id,data).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const deleteClient= async(id)=>{
    return await Axios.delete(public_url+'api/client/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const viewClientonJson=async(id)=>{
    return await Axios.get(public_url+'api/all-client').then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}
