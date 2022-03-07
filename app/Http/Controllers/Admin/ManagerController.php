<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use App\Repositories\AdminRepository;
use App\Models\Admin;
use App\Models\AdminDetail;
use Carbon\Carbon;
use Session;
use Hash;
use DB;

class ManagerController extends Controller
{
    protected $admin;
    protected $admin_detail;

    public function __construct(Admin $admin, AdminDetail $admin_detail){
        $this->admin             = new AdminRepository($admin);
        $this->admin_detail         = new AdminRepository($admin_detail);
    }
    public function index(){
        return view("admin.manager.manager");
    }

    public function get(){
        $data = $this->admin->get_admin();
        return $this->admin->send_response(201, $data, null);
    }
    // public function get_one($id){
    //     $data = $this->product->get_one($id);
    //     return $this->product->send_response(200, $data, null);
    // }
    public function store(Request $request){
        if ($this->admin->check_email($request->data_email)) {
            return $this->admin->send_response("Email đã tồn tại!!", null, 200);
        }else{
            $secret_key = mt_rand(1, 9999999);
            $data_auth = [
                "secret_key"    => $secret_key,
                "email"         => $request->data_email,
                "password"      => Hash::make($request->data_password),
            ];
            $auth_register = $this->admin->create($data_auth);
            $data_detail = [
                "admin_id"   => $auth_register->id,
                "name"       => $request->data_name,
                "phone"      => $request->data_phone,
                "address"    => $request->data_address,
                "role"       => $request->data_role,
            ];
            $this->admin_detail->create($data_detail); 
            return $this->admin->send_response("Đăng kí thành công!! ", "/", 201);
        }
 
        return $this->product->send_response(201, $data_return, null);
    }


}
