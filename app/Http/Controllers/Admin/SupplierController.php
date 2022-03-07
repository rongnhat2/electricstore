<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use App\Repositories\Manager\SupplierRepository;
use App\Models\Supplier;
use Carbon\Carbon;
use Session;
use Hash;
use DB;

class SupplierController extends Controller
{
    protected $supplier;
    protected $type;

    public function __construct(Supplier $supplier){
        $this->supplier             = new SupplierRepository($supplier);
    }
    public function index(){
        return view("admin.manager.supplier");
    }
    public function get(){
        $data  = $this->supplier->get_supplier();
        return $this->supplier->send_response(201, $data, null);
    }

    public function get_one($id){
        $data  = $this->supplier->get_one($id);
        return $this->supplier->send_response(200, $data, null);
    }

    public function store(Request $request){
        $data = [
            "name"      => $request->data_name,
            "slug"      => $this->supplier->to_slug($request->data_name),
        ];
        $category_create = $this->supplier->create($data);
        return $this->supplier->send_response(201, "Create Success", null);
    }

    public function update(Request $request){
        $data = [
            "name"      => $request->data_name,
            "slug"      => $this->supplier->to_slug($request->data_name),
        ];
        $this->supplier->update($data, $request->data_id);
        return $this->supplier->send_response(201, "Create Success", null);
    }
    public function delete($id){
        $data = $this->supplier->delete($id);
        return $this->supplier->send_response(200, "Delete successful", null);
    }
}
