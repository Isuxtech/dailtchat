<?php

namespace App\Repositories;

use App\Models\Post;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

interface PostRepositoryInterface
{
    public function all(Request $request): LengthAwarePaginator;
    public function getArticleBySlug(string $slug): Post;
}
