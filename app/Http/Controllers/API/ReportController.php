<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ReportRepository;
use App\Repositories\ClientRepository;
use App\Models\Bill;


class ReportController extends Controller
{
    public $reportRepository;

    public function __construct(ReportRepository $reportRepository)
    {
        $this->reportRepository = $reportRepository;
        $this->middleware('auth:api');
    }
    public function index(Request $request){
        $formData = $request->all();
        $validator = \Validator::make($formData,[
            'type' =>'required',
            'from_date' =>'required',
            'to_date' =>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'=>false,
                'error'=>$validator->getMessageBag()->first()
            ]);
        }
        if($request->type==1){
            $report = $this->reportRepository->expenseReport($request);
            $total = $this->reportRepository->expenseTotal($request);
            return response()->json([
                'success' => true,
                'message' => 'report',
                'data' => $report,
                'total' => $total,
            ]);
        }elseif($request->type==2){
            $report = $this->reportRepository->billReport($request);
            $total = $this->reportRepository->billTotal($request);
            return response()->json([
                'success' => true,
                'message' => 'report',
                'data' => $report,
                'total' => $total,
            ]);
        }else{
            $report = $this->reportRepository->overallReport($request);
            return response()->json([
                'success' => true,
                'message' => 'report',
                'data' => $report,
                'total' => 0,
            ]);
        }        
    }

    public function billCollection(Request $request){
        $clientRepo = new ClientRepository();
        $client = $clientRepo->getAll();
        foreach($client as $row=>$val){
          $bill[$val->id] = Bill::whereMonth('collection_date', $request->month)->whereYear('collection_date', $request->year)->where('client_id',$val->id)->sum('amount');
        }

        return response()->json([
            'success' => true,
            'message' => 'report',
            'client' => $client,
            'bill' => $bill,
            'year' => $request->year,
            'month' => \Carbon\Carbon::create()->month($request->month)->format('F')
        ]);

    }
}
