<?php 
namespace App\Interfaces;
use Illuminate\Http\Request;

interface CrudInterface{
    public function getAll();
    public function findById($id);
    public function update(Request $request,$id);
    public function create(Request $request);
    public function delete($id);
}