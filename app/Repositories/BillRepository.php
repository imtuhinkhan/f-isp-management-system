<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\Package;
use App\Models\Bill;
use Auth;
class BillRepository implements CrudInterface{

    public function getAll(){
        $bill = Bill::with('clientName')->orderby('collection_date','DESC')->get();
        return $bill;
    }

    public function getAllbyClient($id){
        $bill = Bill::with('clientName')->where('client_id',$id)->orderby('collection_date','DESC')->get();
        return $bill;
    }

    public function findById($id){
        $bill = Bill::with('clientName')->where([['id',$id]])->first();
        return $bill;
    }
    
    public function create(Request $request){
        $bill = new Bill();
        $bill->collection_date  = $request->bill_date;
        $bill->client_id  = $request->client;
        $bill->amount = $request->amount;
        $bill->description = $request->remarks;
        $bill->created_by = Auth::user()->id;
        $bill->save();
        return $bill;
    }

    public function update(Request $request,$id){
       
    }
    public function delete($id){
        
    }
    
}