<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmGenreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        // $this->middleware('auth:api');
        $this->middleware('client.credentials', ['only' => ['index']]);
    }

    public function index(Film $film)
    {
        $genres = $film->genres;

        return response()->json(['data' => $genres]);
    }
}
