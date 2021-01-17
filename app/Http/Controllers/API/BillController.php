<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\BillRepository;
use App\Repositories\ClientRepository;


class BillController extends Controller
{
    public $billRepository;

    public function __construct(BillRepository $billRepository)
    {
        $this->billRepository = $billRepository;
        $this->middleware('auth:api');
    }

    public function index(){
        $bill = $this->billRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'bill List',
            'data' => $bill
        ]);
    
    }

    public function show($id)
    {
        $bill = $this->billRepository->findById($id);
        if(!$bill){
            return response()->json([
                'success' => true,
                'message' => 'bill',
                'data' => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'bill',
            'data' => $bill
        ]);
    }

    public function store(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'bill_date' =>'required',
            'amount' =>'required',
            'client' =>'required',
            'remarks' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $bill = $this->billRepository->create($request);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }

    public function update(Request $request,$id){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'bill_date' =>'required',
            'amount' =>'required',
            'description' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $bill = $this->billRepository->update($request,$id);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }
    public function destroy($id)
    {
        $oldbill= $this->billRepository->findById($id);
        if(!$oldbill){
            return response()->json([
                'success'=>false,
                'error'=>'No bill Found'
            ]);
        }
        $bill = $this->billRepository->delete($id);
        if($bill){
            return response()->json([
                'success'=>true,
                'message'=>'bill deleted'
            ]);
        }

    }

    public function cBill($id){
        $bill = $this->billRepository->getAllbyClient($id);
        $crepo = new ClientRepository();
        $client = $crepo->findById($id);
        if(!$bill){
            return response()->json([
                'success' => true,
                'message' => 'bill',
                'data' => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'bill',
            'data' => $bill,
            'client' => $client,
        ]);
    }
}
