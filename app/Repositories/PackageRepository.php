<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\Package;
use Auth;
class PackageRepository implements CrudInterface{

    public function getAll(){
        $package = Package::get();
        return $package;
    }

    public function findById($id){
        $package = Package::where([['id',$id]])->first();
        return $package;
    }
    public function update(Request $request,$id){
        $package = Package::where([['id',$id]])->first();
        $package->name  = $request->packageName;
        $package->price = $request->price;
        $package->created_by = Auth::user()->id;
        $package->save();
        return $package;
    }
    public function create(Request $request){
        $package = new Package();
        $package->name  = $request->packageName;
        $package->price = $request->price;
        $package->created_by = Auth::user()->id;
        $package->save();
        return $package;
    }
    public function delete($id){
        $package = Package::where([['id',$id]])->delete();
        return $package;
    }
}