<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    public function clientName()
    {
        return $this->hasOne('App\Models\Client', 'id', 'client_id');
    }
}
