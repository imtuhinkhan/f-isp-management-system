import Axios from 'axios'
import {public_url} from '../config'
export const storeExpense=async(data)=>{
    return await Axios.post(public_url+'api/expense',data).then((res)=>{
        return res;
     }).catch(e=>alert(e.response.error));
 }

 export const viewExpense=async()=>{
    return await Axios.get(public_url+'api/expense').then((res)=>{
        return res;
     }).catch(e=>alert(e.response.error));
 }

 export const findExpenseById = async(id)=>{
    return await Axios.get(public_url+'api/expense/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const updateExpense = async(data,id)=>{
    return await Axios.put(public_url+'api/expense/'+id,data).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}

export const deleteExpense= async(id)=>{
    return await Axios.delete(public_url+'api/expense/'+id).then((res)=>{
            return res.data;           
        }).catch((e)=>{console.log(e)});
}
