<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use App\Repositories\Manager\ProductRepository;
use App\Models\Product;
use App\Models\ViewHistory;

use App\Repositories\Manager\CategoryRepository;
use App\Models\Category;

use App\Repositories\Manager\CommentRepository;
use App\Models\Comment;

use Carbon\Carbon;
use Session;
use Hash;
use DB;

class ProductController extends Controller
{
    protected $product;
    protected $view_history;
    protected $category;
    protected $comment;

    public function __construct(Product $product, ViewHistory $view_history, Category $category, Comment $comment){
        $this->product             = new ProductRepository($product);
        $this->view_history        = new ProductRepository($view_history);
        $this->category            = new CategoryRepository($category);
        $this->comment             = new CommentRepository($comment);
    }
    
    // Lấy ra sản phẩm theo request
    public function get_all(Request $request){
        $count = count($this->product->get_all_condition($request));
        $data = [
            "category"  => $request->tag != 0 ? $this->category->get_one($request->tag)[0] : "All",
            "data"      => $this->product->get_condition($request, $count),
            "count"     => $count,
        ];
        return $this->product->send_response(200, $data, null);
    }
    // Lấy ra 1 sản phẩm
    public function get_one(Request $request, $id){
        list($user_id, $token) = static::unpack_token($request);  
        // list($id, $authen) = explode('-', $id, 2);
        // list($user_id, $token) = explode('$', $request->cookie('_token_'), 2);
        // $hasView = $this->product->find_view_history($user_id, $id);
        // if (count($hasView) != 0) {
        //     $this->view_history->update_view($hasView[0]->id);
        // }else{
        //     $view_data = [
        //         "customer_id"   => $user_id,
        //         "product_id"    => $id,
        //         "time_view"     => 1,
        //         "status"        => $authen,
        //     ];
        //     $this->view_history->create($view_data);
        // }
        $data_product = $this->product->get_one($id);
        $data_rate = $this->comment->get_rate($id);
        $data = [
            "data_product"  => $data_product,
            "data_rate"     => $data_rate,
        ];
        // $data = $this->product->get_one($id);
        return $this->product->send_response(200, $data, null);
    }
    // lấy ra 5 sản phẩm của danh mục
    public function get_item_category($id){
        $data_product = $this->product->get_item_category($id);
        $data_type  = $this->category->get_type($id);
        $data = [
            "product"   => $data_product,
            "type"      => $data_type,
        ];
        return $this->product->send_response(200, $data, null);
    }
    // Lấy ra 1 sản phẩm - giỏ hàng
    public function get_one_cart($id){
        $data = $this->product->get_one($id);
        if (count($data) > 0) {
            return $this->product->send_response("Thành công", $data, 200);
        }
        return $this->product->send_response("Không tồn tại", null, 500);
    }
    // lấy ra sản phẩm mới
    public function get_new_arrivals(){
        $data = $this->product->get_new_arrivals();
        return $this->product->send_response(200, $data, null);
    }
    // Lấy ra lịch sử xem sản phẩm
    public function get_recently(Request $request, $item){
        $items = explode(",", $item);
        $data = [];
        foreach ($items as $key => $value) {
            array_push($data, $this->product->get_one($value)[0]);
        }
        return $this->product->send_response(200, $data, null);
    }
    // lấy ra sản phẩm liên quan
    public function get_related($id){
        $product = $this->product->get_one($id);
        $data = $this->product->get_related($product[0]->category_id, $id);
        return $this->product->send_response(200, $data, null);
    }
    // Lấy ra sản phẩm trending carousel
    public function get_trending(){
        $data = $this->product->get_trending();
        return $this->product->send_response(200, $data, null);
    }
    // Lấy ra sản phẩm giảm giá carousel
    public function get_discount(){
        $data = $this->product->get_discount();
        return $this->product->send_response(200, $data, null);
    }
    
    public function get_search(Request $request){
        $text = $request->data_text;
        $category = $request->data_category;
        $slug_data = $this->product->to_slug($text);
        $data = $this->product->find_real_time($slug_data, $category);
        return $this->product->send_response(200, $data, null);
    }
    
    // Kiểm tra token hợp lệ
    public function check_token(Request $request){
        $token = $request->cookie('_token_');
        list($user_id, $token) = explode('$', $token, 2); 
        $user = $this->customer->get_secret($user_id);
        if ($user) {
            return Hash::check($user_id . '$' . $user[0]->secret_key, $token);
        }else{
            return false;
        }
    }

    // Tách token
    public function unpack_token(Request $request){
        $token = $request->cookie('_token_');
        return explode('$', $token, 2); 
    }


}
