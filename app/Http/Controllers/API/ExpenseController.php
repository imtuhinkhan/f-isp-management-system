<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ExpenseRepository;


class ExpenseController extends Controller
{
    public $expenseRepository;

    public function __construct(ExpenseRepository $expenseRepository)
    {
        $this->expenseRepository = $expenseRepository;
        $this->middleware('auth:api');
    }

    public function index(){
        $expense = $this->expenseRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'expense List',
            'data' => $expense
        ]);
    
    }

    public function show($id)
    {
        $expense = $this->expenseRepository->findById($id);
        if(!$expense){
            return response()->json([
                'success' => true,
                'message' => 'expense',
                'data' => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'expense',
            'data' => $expense
        ]);
    }

    public function store(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'expense_date' =>'required',
            'amount' =>'required',
            'description' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $expense = $this->expenseRepository->create($request);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }

    public function update(Request $request,$id){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'expense_date' =>'required',
            'amount' =>'required',
            'description' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }

        $expense = $this->expenseRepository->update($request,$id);
        return response()->json([
                'success'=>true,
                'message'=>'Data stored succesfully'
        ]);
    }
    public function destroy($id)
    {
        $oldExpense= $this->expenseRepository->findById($id);
        if(!$oldExpense){
            return response()->json([
                'success'=>false,
                'error'=>'No expense Found'
            ]);
        }
        $expense = $this->expenseRepository->delete($id);
        if($expense){
            return response()->json([
                'success'=>true,
                'message'=>'expense deleted'
            ]);
        }

    }
}
