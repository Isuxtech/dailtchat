<?php


namespace App\Repositories;


use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Str;

class PostRepository implements PostRepositoryInterface
{
//    .. write a logic used in getting a class

      /**
       * understand that you can also use the map callback inside the Model
       *
       * i learnt about using paginator instance to work on my data
       */
    public function all(){
        $post = Post::paginate(3);
        return $this->formatResult($post);
    }

    private function formatResult($article){
        $pageResult = $article;
        $pageItems = $pageResult->items();


        foreach( $pageItems  as $key=>$items){
            $pageItems[$key]['id'] = $pageItems[$key]['id'];
            $pageItems[$key]['slug'] = $pageItems[$key]['slug'] ?? 'none';
            $pageItems[$key]['title'] = Str::upper($pageItems[$key]['title']);
            $pageItems[$key]['post'] = Str::limit($pageItems[$key]['post_body'], 120);
            $pageItems[$key]['day'] = Carbon::make($pageItems[$key]['created_at'])->day;
            $pageItems[$key]['month'] = $this->formatDate( Carbon::make($pageItems[$key]['created_at'])->monthName);
            $pageItems[$key]['dayName'] = $this->formatDate(Carbon::make($pageItems[$key]['created_at'])->dayName);
        }

        return $pageResult;

    }
    private function formatDate($value){
        return    Str::upper(Str::substr($value, 0,3) );
    }

}
