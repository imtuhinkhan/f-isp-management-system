<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Auth;
class UserRepository implements CrudInterface{

    public function getAll(){
        $user = User::get();
        return $user;
    }

    public function findById($id){
        $user = User::where([['id',$id]])->first();
        return $user;
    }
    public function update(Request $request,$id){
        $user = User::where([['id',$id]])->first();
        $user->name  = $request->name;
        $user->email = $request->email;
        if($request->password){
            $user->password = Hash::make($request->password);
        }
        $user->save();
        return $user;
    }
    public function create(Request $request){
        $user = new User();
        $user->name  = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }
    public function delete($id){
        $user = User::destroy($id);
        return $user;
    }
}