<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FilmController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api');
        $this->middleware('client.credentials', ['only' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // dd(auth()->guard('api')->user());
        $films = Film::paginate(3);
        // $auth_user = auth('api')->user();
        // dd($auth_user);

        return response()->json(['data' => $films]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        // dd($data);
        // $data['photo'] = '/img/thumbnail.jpg';
        // $data['release'] = strtotime($request->release);
        // dd($data);
        // $file_name = $_FILES['image']['name'];
        // $file_size = $_FILES['image']['size'];
        // $file_temp = $_FILES['image']['tmp_name'];

        // $div = explode('.', $file_name);
        // $file_ext = strtolower(end($div));
        // $unique_image = substr(md5(time()), 0, 10) . '.' . $file_ext;
        // $uploaded_image = "/public/img/" . $unique_image;
        // move_uploaded_file($file_temp, $uploaded_image);
        // return response()->json(['data' => $data], 200);
        $file = $request->file('photo');
        $dateTime = date('Ymd_His');
        $filename = '/img/' . $dateTime . '-' . $file->getClientOriginalName();
        $savePath = public_path('/img/');

        $data['photo'] = $filename;

        // return response()->json(['data' => $data], 200);

        $film = Film::create($data);
        $file->move($savePath, $filename);
        return response()->json(['data' => $film], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function show(Film $film)
    {
        return response()->json(['data' => $film]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function edit(Film $film)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Film $film)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function destroy(Film $film)
    {
        //
    }
}
