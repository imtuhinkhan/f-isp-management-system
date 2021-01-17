import Axios from 'axios'
import {public_url} from '../config'
export const storePacakge=async(data)=>{
    return await Axios.post(public_url+'api/package',data).then((res)=>{
        return res;
     }).catch(e=>alert(e.response.error));
 }

 export const viewPackage=async()=>{
    return await Axios.get(public_url+'api/package').then((res)=>{
        return res;
     }).catch(e=>alert(e.response.error));
 }

 export const findPackageById = async(id)=>{
    return await Axios.get(public_url+'api/package/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const updatePackage = async(data,id)=>{
    return await Axios.put(public_url+'api/package/'+id,data).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const deletePackage= async(id)=>{
    return await Axios.delete(public_url+'api/package/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}
