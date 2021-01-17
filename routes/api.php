<?php
Use App\Http\Controllers\API\PackageController;
Use App\Http\Controllers\API\ClientController;
Use App\Http\Controllers\API\DashboardController;
Use App\Http\Controllers\API\ExpenseController;
Use App\Http\Controllers\API\BillController;
Use App\Http\Controllers\API\ReportController;
Use App\Http\Controllers\API\UserController;

Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});
Route::get('/dashboard',[DashboardController::class,'index'])->middleware('auth:api');
Route::get('/getBarGraphData',[DashboardController::class,'getBarGraphData']);
Route::get('/all-client',[ClientController::class,'allJson']);
Route::get('/client-bill/{id}',[BillController::class,'cBill']);
Route::post('/report',[ReportController::class,'index']);
Route::post('/billcollection/report',[ReportController::class,'billCollection']);
Route::apiResource('package', PackageController::class);
Route::apiResource('client', ClientController::class)->middleware('auth:api');
Route::apiResource('expense', ExpenseController::class);
Route::apiResource('bill', BillController::class);
Route::apiResource('user', UserController::class);
