<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmCommentController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api');
        $this->middleware('client.credentials', ['only' => ['index']]);
    }
    public function index(Film $film)
    {
        $comments = $film->comments;

        return response()->json(['data' => $comments]);
    }
}
