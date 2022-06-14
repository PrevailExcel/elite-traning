<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;
use App\Models\Listing;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $listings = Listing::all();
    return view('welcome', compact('listings'));
});


Route::get('/listing', [ListingController::class, 'getData'])->name('listing');


