<?php 
namespace App\Repositories;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\Bill;
use App\Models\Expense;
use Auth;
class DashboardRepository {
    public function getExpenseByMonth($year,$month){
        return $expense = Expense::whereMonth('expense_date', $month)->whereYear('expense_date', $year)->sum('amount');
    }

    public function getBillByMonth($year,$month){
        return $bill = Bill::whereMonth('collection_date', $month)->whereYear('collection_date', $year)->sum('amount');

    }

    public function getProfitByMonth($year,$month){
        $bill = $this->getBillByMonth($year,$month);
        $expense = $this->getExpenseByMonth($year,$month);
        return $profit = $bill - $expense;
    }
    
}