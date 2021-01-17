<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Models\Bill;
use App\Models\Expense;
use Auth;
use Carbon\Carbon;
class ReportRepository{

    public function expenseReport(Request $request){
        $expense = Expense::whereBetween('expense_date', [$request->from_date, $request->to_date])->orderby('expense_date','DESC')->get();
        return $expense;
    }
    public function expenseTotal(Request $request){
        $expense = Expense::whereBetween('expense_date', [$request->from_date, $request->to_date])->orderby('expense_date','DESC')->sum('amount');
        return $expense;
    }

    public function billReport(Request $request){
        $bill = Bill::with('clientName')->whereBetween('collection_date', [$request->from_date, $request->to_date])->orderby('collection_date','DESC')->get();
        return $bill;
    }
    public function billTotal(Request $request){
        $Bill = Bill::whereBetween('collection_date', [$request->from_date, $request->to_date])->orderby('collection_date','DESC')->sum('amount');
        return $Bill;
    }

    public function overallReport(Request $request){
        $startDate = new Carbon($request->from_date);
        $endDate = new Carbon($request->to_date);
        $all_dates = array();
        $totalBill = 0;
        $totalExpense = 0;
        $totalMargin= 0;
        while ($startDate->lte($endDate)){
            $all_dates = $startDate->toDateString();
            $bill = Bill::where('collection_date', $startDate->toDateString())->orderby('collection_date','DESC')->sum('amount');
            $expense = Expense::where('expense_date', $startDate->toDateString())->orderby('expense_date','DESC')->sum('amount');
            $margin = $bill - $expense;
            $report['date'] = $all_dates;
            $report['bill'] = $bill;
            $report['expense'] = $expense;
            $report['margin'] = $margin;
            $totalBill  = $totalBill+$bill;
            $totalExpense  = $totalExpense+$expense;
            $totalMargin  = $totalMargin+$margin;
        $data['report'][]=$report;

        $startDate->addDay();
        }
        $data['totalBill']=$totalBill;
        $data['totalExpense']=$totalExpense;
        $data['totalMargin']=$totalMargin;
        return $data;
    }
}