<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'location' => $this->faker->address(),
            'price' => rand(500, 99999),
            'rating' => rand(1, 5),
            'photo' => $this->faker->imageUrl(),
            'tag' => rand(1, 3),
            'phone'  => rand(1111111111, 9999999999),
            'seen' => rand(200, 987),
            'liked' => rand(0, 1),
        ];
    }
}
