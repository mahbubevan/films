<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Comment;
use App\Genre;

class Film extends Model
{
    use SoftDeletes;

    const DEFAULT_DESCRIPTION = "NO DESCRIPTION";
    const DEFAULT_RATING = '0';
    const TICKET_AVAILABLE = 'available';
    const TICKET_NOT_AVAILABLE = 'not_available';

    protected $table = 'films';
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name',
        'description', 'release_date',
        'rating', 'ticket',
        'price', 'country', 'photo',
    ];

    protected $hidden = [
        'pivot',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class, 'film_id');
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }

    public function isAvailable()
    {
        return $this->ticket == Film::TICKET_AVAILABLE;
    }
}
