<?php


namespace App\Repositories;


use App\Models\Post;
use Carbon\Carbon;
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
        $post = Post::with(['category'=> function($query){
            $query->select(['cat_id','category_scheme']);
        }])->paginate(6);
        return $this->formatResult($post);
    }

    private function formatResult($article){
       $pageResult = $article;
        $pageItems = $pageResult->items();


        foreach( $pageItems  as $key=>$items){
            $pageItems[$key]['slug'] = $pageItems[$key]['slug'] ?? 'none';
            $pageItems[$key]['title'] = Str::title($pageItems[$key]['title']);
            $pageItems[$key]['abstract'] = Str::title($pageItems[$key]['title']);
            $pageItems[$key]['color'] = $pageItems[$key]['category']['category_scheme'];
            $pageItems[$key]['day'] = Carbon::make($pageItems[$key]['created_at'])->day;
            $pageItems[$key]['month'] = $this->formatDate( Carbon::make($pageItems[$key]['created_at'])->monthName);
            $pageItems[$key]['dayName'] = $this->formatDate(Carbon::make($pageItems[$key]['created_at'])->dayName);
        }

        return $pageResult;

    }
    private function formatDate($value){
        return    Str::upper(Str::substr($value, 0,3) );
    }


    public function getArticle($id){
       return $article =  Post::where('slug',$id)->with(
            ['user' => function($query){
                $query->select('id','name');
            }]
        )->with(
            ['category' => function($query){
                $query->select('cat_id','category_name','category_scheme');
            }]
        )
            ->get()
           ->map(function($query){
               return [
                   'title' => Str::upper($query->title),
                   'reference' => $query->more_reference,
                   'image_url' => $query->image_url,
                   'abstract' => $query->abstract,
                   'slug' => $query->slug,
                   'body' => $query->post_body,
                   'views' => $query->views,
                   'slug' => $query->slug,
                   'user' => $query->user->name,
                   'category_name' => $query->category->category_name,
                   'color' => $query->category->category_scheme,
                   'day' => $this->formatDate(Carbon::make($query->created_at)->day),
                   'month' => $this->formatDate( Carbon::make($query->created_at)->monthName),
                   'dayName' => $this->formatDate(Carbon::make($query->created_at)->dayName),



               ];
           });
    }

}
