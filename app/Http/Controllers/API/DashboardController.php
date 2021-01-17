<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Expense;
use App\Models\Bill;
use Carbon\Carbon;
use App\Repositories\DashboardRepository;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }
    public function index(){
        $data['totalClient']=Client::where('status',1)->count();
        $data['newClient'] = Client::whereMonth('created_at', Carbon::now()->month)->whereYear('created_at', Carbon::now()->year)->count();
        $data['expense'] = Expense::whereMonth('expense_date', Carbon::now()->month)->whereYear('expense_date', Carbon::now()->year)->sum('amount');
        $data['bill'] = Bill::whereMonth('collection_date', Carbon::now()->month)->whereYear('collection_date', Carbon::now()->year)->sum('amount');
        return response()->json([
            'success' => true,
            'message' => 'package List',
            'data' => $data
        ]);
    }

    public function getBarGraphData(){
        $date = \Carbon\Carbon::now();
        $currenNumber = $date->format('m');
        $currenYear= $date->format('Y');
        $dashboardRepo = new DashboardRepository();
        for($i=4;$i>0;$i--){
            $month = $currenNumber-$i;
            if($month<1){
                $month = $month+12;
                $year = $currenYear-1;
            }
            $numberMonth[$year][] =$month; 
            $labels[] = \Carbon\Carbon::create()->month($month)->format('F');
        }
        $labels[] = $date->format('F');
        $numberMonth[$currenYear][] =$currenNumber; 

        foreach($numberMonth as $year=>$val){
            foreach($val as $row=>$month){
                $bill[] = $dashboardRepo->getBillByMonth($year,$month);
                $expense[] = $dashboardRepo->getExpenseByMonth($year,$month);
                $profit[] = $dashboardRepo->getProfitByMonth($year,$month);
            }
        }

        $test['label'] = '# Expense';
        $test['data'] = $expense;
        $test['backgroundColor'] = 'rgb(255, 99, 132)';

        $test2['label'] = '# Bill Collected';
        $test2['data'] = $bill;
        $test2['backgroundColor'] = 'rgb(54, 162, 235)';

        $test3['label'] = '# Profit';
        $test3['data'] = $profit;
        $test3['backgroundColor'] = 'rgb(75, 192, 192)';
        $dataset[]=$test;
        $dataset[]=$test2;
        $dataset[]=$test3;

        $data['labels']=$labels;
        $data['dataset']=$dataset;
        return $data;
    }
}
