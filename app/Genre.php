<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Film;

class Genre extends Model
{
    use SoftDeletes;

    const DEFAULT_GENRE = 'NOT AVAILABLE';

    protected $fillable = [
        'name',
    ];

    public function films()
    {
        return $this->belongsToMany(Film::class);
    }
}
