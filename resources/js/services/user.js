import Axios from 'axios'
import {public_url} from '../config'
import {removeToken} from './auth'

export const storeUser=async(data)=>{
    return await Axios.post(public_url+'api/user',data).then((res)=>{
        return res;
     }).catch(e=>console.log(e));
 }

 export const viewUser=async()=>{
    return await Axios.get(public_url+'api/user').then((res)=>{
        return res;
     }).catch((e)=>{
         if(e.response.status==401){
            return removeToken();
         }
     });
 }

 export const findUserById = async(id)=>{
    return await Axios.get(public_url+'api/user/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const updateUser = async(data,id)=>{
    return await Axios.put(public_url+'api/user/'+id,data).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const deleteUser= async(id)=>{
    return await Axios.delete(public_url+'api/user/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}


