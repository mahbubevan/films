<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Film ROutes
Route::resource('films', 'FilmController');
Route::resource('films.comments', 'FilmCommentController', ['only' => ['index']]); // Comment list for specific film
Route::resource('films.users', 'FilmUserController', ['only' => ['index']]); // User List For Specific Film where user commented
Route::resource('films.genres', 'FilmGenreController', ['only' => ['index']]); // Genres List For Specific Films

// Genre ROutes
Route::resource('genres', 'GenreController');
Route::resource('genres.films', 'GenreFilmController', ['only' => ['index']]); // Films List For Specific Genre

//Comments Routes
Route::resource('comments', 'CommentController');

//Users
Route::resource('users', 'UserController');
Route::resource('users.comments', 'UserCommentController', ['only' => ['index']]); //Specific User's Comments list
Route::resource('users.films', 'UserFilmController', ['only' => ['index']]); // Flim list In Which specific user Have Commented
