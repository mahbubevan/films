<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;

class FilmUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Film $film)
    {
        $users = $film->comments()
            ->with('user')
            ->get();

        return response()->json(['data' => $users]);
    }
}
