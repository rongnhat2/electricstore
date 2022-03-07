<?php

namespace App\Repositories\Manager;

use Illuminate\Database\Eloquent\Model;
use App\Repositories\BaseRepository;
use App\Repositories\RepositoryInterface;
use Session;
use Hash;
use DB;

class CategoryRepository extends BaseRepository implements RepositoryInterface
{
    protected $model;

    public function __construct(Model $model){
        $this->model = $model;
    }

    public function get_category(){
        $sql = DB::table('category')->get();
        return $sql;
        // return DB::select($sql);
    }

    public function get_type($id){
        $sql = "SELECT * 
                FROM type
                WHERE category_id = ".$id;
        return DB::select($sql);
    }
    public function has_visible($slug){
        $sql = "SELECT * 
                FROM type
                WHERE slug like '".$slug."'";
        return DB::select($sql);
    }
    public function get_one($id){
        $sql = "SELECT * FROM category WHERE id = ".$id;
        return DB::select($sql);
    }
    
}
