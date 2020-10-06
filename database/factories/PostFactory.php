<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1,5),
            'title' => $this->faker->unique()->realText(30),
            'slug' => $this->faker->slug,
            'post_body' => $this->faker->realText(1000),
            'more_reference' => $this->faker->realText(100),
            'image_url' => $this->faker->imageUrl(),
            'category_id'=>$this->faker->numberBetween(1,5),
            'abstract' => $this->faker->realText(100),
            'views' => $this->faker->numberBetween(1,6000),
        ];
    }
}
