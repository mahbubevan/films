<?php

use App\Comment;
use App\Film;
use App\Genre;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        User::truncate();
        Film::truncate();
        Comment::truncate();
        Genre::truncate();
        DB::table('film_genre')->truncate();

        $userQuantity = 10;
        $filmQuantity = 6;
        $commentQuantity = 6;
        $genreQuantity = 10;

        factory(User::class, $userQuantity)->create();
        factory(Genre::class, $genreQuantity)->create();

        factory(Film::class, $filmQuantity)->create()
            ->each(function ($film) {
                $genres = Genre::all()->random(mt_rand(1, 5))->pluck('id');
                $film->genres()->attach($genres);

                // $comments = Comment::all()->random()->id;
                // $film->genres()->attach($comments);
            });

        factory(Comment::class, $commentQuantity)->create();
    }
}
