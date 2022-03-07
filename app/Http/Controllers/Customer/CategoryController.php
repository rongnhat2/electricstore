<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Repositories\Manager\CategoryRepository;
use App\Models\Category;
use App\Models\CategoryType;
use Carbon\Carbon;
use Session;
use Hash;
use DB;

class CategoryController extends Controller
{
    protected $category;
    protected $category_type;

    public function __construct(Category $category, CategoryType $category_type){
        $this->category             = new CategoryRepository($category);
        $this->category_type        = new CategoryRepository($category_type);
    }
    public function get(){
        $data_category  = $this->category->get_category();
        $data = [];
        foreach ($data_category as $key => $value) {
            $data_type  = $this->category->get_type($value->id);
            $data_item  = [
                "category" => $value,
                "data_type" => $data_type,
            ];
            array_push($data, $data_item);
        }
        // $data_category  = $this->category->get_category();
        // $data           = [
        //     "category"  => $data_category,
        // ];
        return $this->category->send_response(200, $data, null);
    }
    public function get_type($id){
        $data  = $this->category->get_type($id);
        return $this->category->send_response(200, $data, null);
    }

}
