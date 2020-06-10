<?php

namespace App\Http\Controllers;

use App\Film;
use App\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function store(Request $request, Film $film)
    {

        // // $genres = $request->all();
        // $genres = Genre::all();
        // $genres_array = json_decode($request->genres, true);
        // $genres_collection = collect($genres_array['genres'])->pluck('name');
        // // dd($genres_collection);

        // foreach ($genres_collection as $genre) {
        //     $genre = $genres->where('name', $genre)->pluck('id');
        //     $film = $film->genres()->attach($genre);
        // }

        // // dd($genre);
        // // foreach ($genres as $genre) {
        // //     $genre = Genre::where('name', $genre)->get();

        // // }
        // // dd($genre);


        // // dd($genres);

        $genres = collect(json_decode($request->genres, true));
        // foreach ($genres as $genre) {
        // dd($genre);
        // $genre = Genre::whereIn('name', $genres)->get();
        foreach ($genres as $genre) {
            $genre_id = DB::table('genres')->whereIn('name', $genre)->get()->pluck("id");
            // $film->genres()->attach($genre_id);
            dd($genre_id);
        }
        // dd($genre);
        // $film = $film->genres()->attach($genre);
        // }
        // $genre_id = Genre::all()->where('name')
        // dd($genres);

        return response()->json(['data' => $film]);
    }
}
