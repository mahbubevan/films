<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserFilmController extends Controller
{
    public function index(User $user)
    {
        //dd($user);
        $films = $user->comments()
            ->with('film')->get()
            ->pluck('film');

        return response()->json(['data' => $films]);
    }
}
