<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class projectsController extends Controller
{
    public function projects($id){
        $record = Project::where('id',$id)->first();

        return response()->json([
            'message'=>'retrieved successfully',
            'data'=> $record,
        ],201);
    }
}
