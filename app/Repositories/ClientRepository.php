<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\Package;
use App\Models\Client;
use Auth;
class ClientRepository implements CrudInterface{

    public function getAll(){
        $client = Client::with('package')->where('status',1)->get();
        return $client;
    }

    public function findById($id){
        $client = Client::with('package')->where([['id',$id]])->first();
        return $client;
    }
    public function update(Request $request,$id){
        $client = Client::where([['id',$id]])->first();
        $client->client_name  = $request->clientName;
        $client->user_name = $request->userName;
        $client->address = $request->address;
        $client->phone = $request->phone;
        $client->package_id = $request->package;
        $client->status = 1;
        $client->created_by = Auth::user()->id;
        $client->save();
        return $client;
    }
    public function create(Request $request){
        $client = new Client();
        $client->client_name  = $request->clientName;
        $client->user_name = $request->userName;
        $client->address = $request->address;
        $client->phone = $request->phone;
        $client->package_id = $request->package;
        $client->status = 1;
        $client->created_by = Auth::user()->id;
        $client->save();
        return $client;
    }
    public function delete($id){
        $client = Client::findorfail($id);
        $client->status = 0;
        $client->save();
        return $client;
    }
}