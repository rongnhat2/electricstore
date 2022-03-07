<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $fillable = ['category_id', 'classify_id', 'supplier_id', 'sku', 'name', 'slug', 'tsearch', 'images', 'metadata', 'description', 'detail', 'prices', 'discount', 'status', 'created_at', 'updated_at'];
}
