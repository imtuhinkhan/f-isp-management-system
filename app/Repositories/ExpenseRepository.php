<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\Package;
use App\Models\Expense;
use Auth;
class ExpenseRepository implements CrudInterface{

    public function getAll(){
        $expense = Expense::orderby('expense_date','DESC')->get();
        return $expense;
    }

    public function findById($id){
        $expense = Expense::where([['id',$id]])->first();
        return $expense;
    }
    public function update(Request $request,$id){
        $expense = Expense::where([['id',$id]])->first();        
        $expense->expense_date  = $request->expense_date;
        $expense->amount = $request->amount;
        $expense->description = $request->description;
        $expense->created_by = Auth::user()->id;
        $expense->save();
        return $expense;
    }
    public function create(Request $request){
        $expense = new Expense();
        $expense->expense_date  = $request->expense_date;
        $expense->amount = $request->amount;
        $expense->description = $request->description;
        $expense->created_by = Auth::user()->id;
        $expense->save();
        return $expense;
    }
    public function delete($id){
        $expense = Expense::where([['id',$id]])->delete();
        return $expense;
    }
}