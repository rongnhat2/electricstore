<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'order_time';
    protected $fillable = ['customer_id', 'sub_total', 'discount', 'total', 'name', 'phone', 'address', 
            'order_value', 'order_status', 'payment_value', 'payment_status', 'status', 'created_at', 'updated_at'];
}
