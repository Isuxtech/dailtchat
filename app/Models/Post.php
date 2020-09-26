<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    function user(){
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
    function category(){
        return $this->hasOne('App\Models\Category', 'cat_id', 'category_id');
    }

}
