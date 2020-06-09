<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;
use App\Film;

class Comment extends Model
{
    use SoftDeletes;

    protected $table = 'comments';
    protected $dates = ['deleted_at'];

    const DEFAULT_COMMENT = 'NO COMMENTS';

    protected $fillable = [
        'user_id', 'film_id',
        'comment',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function film()
    {
        return $this->belongsTo(Film::class);
    }
}
