<?php

namespace App\Http\Resources;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        /** @var Post $post */
        $post = $this;

        return [
            'title' => Str::title($post->title),
            'reference' => $post->more_reference,
            'image_url' => $post->image_url,
            'abstract' => $post->abstract,
            'slug' => $post->slug,
            'body' => $post->post_body,
            'views' => $post->views,
            'user' => $post->user->name,
            'category_name' => $post->category->category_name,
            'color' => $post->category->category_scheme,
            'day' => $post->created_at->day,
            'month' => $post->created_at->shortMonthName,
            'dayName' => $post->created_at->shortDayName,
        ];
    }
}
