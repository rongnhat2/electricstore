<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Session;
use Hash;
use DB;

class DisplayController extends Controller
{
    public function index(Request $request){
        $customer_data = static::generate_logined($request); 
        $navigationStatus       = "show";
        return view("customer.index", compact("navigationStatus", "customer_data"));
    }
    public function product(Request $request, $slug){
        $customer_data = static::generate_logined($request); 
        $navigationStatus       = " ";
        return view("customer.product", compact("navigationStatus", "customer_data"));
    }
    public function category(Request $request){
        $customer_data = static::generate_logined($request); 
        $navigationStatus       = " ";
        return view("customer.category", compact("navigationStatus", "customer_data"));
    }
    public function cart(Request $request){
        $customer_data = static::generate_logined($request); 
        $navigationStatus       = " ";
        return view("customer.cart", compact("navigationStatus", "customer_data"));
    }
    public function checkout(Request $request){
        $customer_data = static::generate_logined($request); 
        $navigationStatus       = " ";
        return view("customer.checkout", compact("navigationStatus", "customer_data"));
    }
    
    public function profile(Request $request){
        $customer_data = static::generate_logined($request); 
        $navigationStatus       = " ";
        return view("customer.profile", compact("navigationStatus", "customer_data"));
    }




    // Generate user detail
    public function generate_logined($request){
        $user_login = [
            'id'        => null,
            'email'     => null,
            'name'      => null,
            'phone'     => null,
            'avatar'    => null,
            'address'   => null,
            'is_login'  => false
        ];
        $token = $request->cookie('_token_');
        if ($token) {
            list($user_id, $token) = explode('$', $request->cookie('_token_'), 2);
            $sql_getAuth    = 'SELECT   customer.id,
                                        customer.email,
                                        customer_detail.name,
                                        customer_detail.phone,
                                        customer_detail.avatar,
                                        customer_detail.address
                                FROM customer 
                                LEFT JOIN customer_detail
                                ON customer.id = customer_detail.customer_id
                                WHERE customer.id = "'.$user_id.'"';
            $hasAuth    = DB::select($sql_getAuth);
            if (count($hasAuth) != 0) {
                $user_login['id']           = $hasAuth[0]->id;
                $user_login['email']        = $hasAuth[0]->email;
                $user_login['name']         = $hasAuth[0]->name;
                $user_login['avatar']       = $hasAuth[0]->avatar;
                $user_login['phone']        = $hasAuth[0]->phone;
                $user_login['address']      = $hasAuth[0]->address;
                $user_login['is_login']     = true;
            }
        }
        return $user_login;
    }
}
