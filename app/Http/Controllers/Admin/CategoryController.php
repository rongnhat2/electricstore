<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

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
    protected $type;

    public function __construct(Category $category, CategoryType $type){
        $this->category             = new CategoryRepository($category);
        $this->type                 = new CategoryRepository($type);
    }
    public function index(){
        return view("admin.manager.category");
    }
    public function get(){
        $data  = $this->category->get_category();
        return $this->category->send_response(201, $data, null);
    }
    public function get_type($id){
        $data  = $this->category->get_type($id);
        return $this->category->send_response(201, $data, null);
    }
    
    public function get_one($id){
        $data_category  = $this->category->get_one($id);
        $data_type      = $this->category->get_type($id);
        $data = [
            "data_category" => $data_category,
            "data_type"     => $data_type,
        ];
        return $this->category->send_response(200, $data, null);
    }

    public function store(Request $request){
        $data = [
            "name"      => $request->data_name,
            "slug"      => $this->category->to_slug($request->data_name),
            "metadata"  => $request->data_meta,
        ];
        $category_create = $this->category->create($data);

        $category_type = explode(",", $request->data_category);
        foreach ($category_type as $key => $value) {
            $data_type = [
                "category_id"   => $category_create->id,
                "name"          => $value,
                "slug"          => $this->category->to_slug($value),
            ];
            $this->type->create($data_type);
        }
        return $this->category->send_response(201, "Create Success", null);
    }

    public function update(Request $request){
        $data = [
            "name"      => $request->data_name,
            "slug"      => $this->category->to_slug($request->data_name),
            "metadata"  => $request->data_meta,
        ];
        $category_create = $this->category->update($data, $request->data_id);

        // Xóa danh mục cũ
        $category_remove = explode(",", $request->data_remove);
        foreach ($category_remove as $key => $value) {
            $this->type->delete($value);
        }

        // cập nhật danh mục mới
        $category_type = explode(",", $request->data_category);
        foreach ($category_type as $key => $value) {
            $has_category = $this->category->has_visible($this->category->to_slug($value));
            if (count($has_category) == 0) {
                $data_type = [
                    "category_id"   => $request->data_id,
                    "name"          => $value,
                    "slug"          => $this->category->to_slug($value),
                ];
                $this->type->create($data_type);
            }
        }
        return $this->category->send_response(201, "Create Success", null);
    }
    public function delete(Request $request){
        $data = $this->category->delete($request->data_id);
        return $this->category->send_response(200, "Delete successful", null);
    }
}
