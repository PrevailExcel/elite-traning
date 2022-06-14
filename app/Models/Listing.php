<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'price',
        'rating',
        'photo',
        'tag',
        'phone',
        'seen',
        'liked',
    ];
    
}
