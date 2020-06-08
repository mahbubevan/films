<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

use App\Comment;
use App\Film;
use App\Genre;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt('secret'), // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(Film::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph(1),
        'release' => $faker->date(),
        'rating' => $faker->randomElement([1, 2, 3, 4, 5]),
        'price' => $faker->randomElement([100, 200, 300]),
        'ticket' => $faker->randomElement([Film::TICKET_AVAILABLE, Film::TICKET_NOT_AVAILABLE]),
        'photo' => '/img/thumbnail.jpg',
        'country' => $faker->country,
    ];
});

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'comment' => Comment::DEFAULT_COMMENT,
        'user_id' => User::all()->random()->id,
        'film_id' => Film::all()->random()->id,
    ];
});

$factory->define(Genre::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
    ];
});
