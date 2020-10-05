<?php


namespace App\Repositories;


use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostRepository implements PostRepositoryInterface
{
//    .. write a logic used in getting a class

    /**
     * understand that you can also use the map callback inside the Model
     *
     * i learnt about using paginator instance to work on my data
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function all(Request $request): LengthAwarePaginator
    {
        $pageSize = (int)$request->input("size");
        $posts = Post::with(['category' => function ($query) {
            $query->select(['cat_id', 'category_scheme']);
        }])->paginate($pageSize);

        if ($pageSize > 0)
            $posts->appends("size", $pageSize);

        return $posts;
    }



    /**
     * @param $slug
     * @return Post
     */
    public function getArticleBySlug($slug): Post
    {
        /** @var Post $post */
        $post = Post::with(['user' => function ($query) {
            $query->select('id', 'name');
        }])->with(['category' => function ($query) {
            $query->select('cat_id', 'category_name', 'category_scheme');
        }])->where('slug', $slug)
            ->firstOrFail();
        return $post;
    }

    public function searchPerTerm($request): LengthAwarePaginator
    {
        $term = $request->input("term");
        $pageSize = (int)$request->input("size");
        $posts = Post::where('title','like', "%{$term}%")
            ->orWhere('abstract','like', "%{$term}%")
            ->orWhere('slug','like', "%{$term}%")
            ->orWhere('post_body','like', "%{$term}%")
            ->with(['category' => function ($query) {
            $query->select(['cat_id', 'category_scheme']);
        }])->paginate($pageSize);

        if ($pageSize > 0)
            $posts->appends("size", $pageSize);

        return $posts;
    }


}
