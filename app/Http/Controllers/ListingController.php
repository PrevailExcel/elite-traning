<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    public function getData(){
        $listing = Listing::all();
        return $listing;
    }
}
