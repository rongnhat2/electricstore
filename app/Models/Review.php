<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $table = 'review';
    protected $fillable = ['customer_id', 'product_id', 'rating', 'message', 'status', 'created_at', 'updated_at'];
}
