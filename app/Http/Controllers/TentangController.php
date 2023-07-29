<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TentangController extends Controller
{
    public function index()
    {
                // Get all posts from the database
                $posts = Post::latest()->get();

                // Return the view using Inertia with the posts data
                return Inertia::render('Tentang/Index', [
                    'posts' => $posts,
                ]);
    }
}