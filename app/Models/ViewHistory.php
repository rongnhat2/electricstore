<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewHistory extends Model
{
    use HasFactory;
    protected $table = 'view_history';
    protected $fillable = ['customer_id', 'product_id', 'time_view', 'status', 'created_at', 'updated_at'];
}
