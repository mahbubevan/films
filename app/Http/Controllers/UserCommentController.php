<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserCommentController extends Controller
{
    public function index(User $user)
    {
        $comments = $user->comments;

        return response()->json(['data' => $comments]);
    }
}
