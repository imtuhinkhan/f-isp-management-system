<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;

class UserController extends Controller
{
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
        $this->middleware('auth:api');
    }

    public function index(){
        $user = $this->userRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'user List',
            'data' => $user
        ]);
    
    }


    public function show($id)
    {
        $user = $this->userRepository->findById($id);
        if(!$user){
            return response()->json([
                'success' => true,
                'message' => 'user not found',
                'data' => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'user',
            'data' => $user
        ]);
    }

    public function store(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' =>'required',
            'email' =>'required',
            'password' =>['required','confirmed']
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $user = $this->userRepository->create($request);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }

    public function update(Request $request,$id){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'name' =>'required',
            'email' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $user = $this->userRepository->update($request,$id);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }
    public function destroy($id)
    {
        $olduser= $this->userRepository->findById($id);
        if(!$olduser){
            return response()->json([
                'success'=>false,
                'error'=>'No user Found'
            ]);
        }
        $user = $this->userRepository->delete($id);
        if($user){
            return user()->json([
                'success'=>true,
                'message'=>'user deleted'
            ]);
        }

    }
}
