<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\PackageRepository;


class PackageController extends Controller
{
    public $packageRepository;

    public function __construct(PackageRepository $packageRepository)
    {
        $this->packageRepository = $packageRepository;
        $this->middleware('auth:api');
    }

    public function index(){
        $package = $this->packageRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'package List',
            'data' => $package
        ]);
    
    }

    public function show($id)
    {
        $package = $this->packageRepository->findById($id);
        if(!$package){
            return response()->json([
                'success' => true,
                'message' => 'package',
                'data' => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'package',
            'data' => $package
        ]);
    }

    public function store(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'packageName' =>'required',
            'price' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $package = $this->packageRepository->create($request);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }

    public function update(Request $request,$id){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'packageName' =>'required',
            'price' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $package = $this->packageRepository->update($request,$id);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }
    public function destroy($id)
    {
        $oldPackage= $this->packageRepository->findById($id);
        if(!$oldPackage){
            return response()->json([
                'success'=>false,
                'error'=>'No Package Found'
            ]);
        }
        $package = $this->packageRepository->delete($id);
        if($package){
            return response()->json([
                'success'=>true,
                'message'=>'package deleted'
            ]);
        }

    }
}
