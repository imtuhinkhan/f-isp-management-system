<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    public function package()
    {
        return $this->hasOne('App\Models\Package', 'id', 'package_id');
    }
}
