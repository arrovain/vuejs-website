<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        return News::all();
    }

    public function store(Request $request)
    {
        $news = News::create($request->all());
        return response()->json($news, 201);
    }

    public function show($id)
    {
        return News::find($id);
    }

}
