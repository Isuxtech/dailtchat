<?php

namespace App\Repositories;

interface PostRepositoryInterface
{
    public function all();
    public function getArticle($id);
}
