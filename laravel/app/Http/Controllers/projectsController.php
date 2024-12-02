<?php

namespace App\Http\Controllers;
use App\Models\Project;
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

    public function addProject(Request $requst){
        $validated = $requst->validate([
            'name'=>'string|max255',
            'description'=>'string|required',
            'color'=>'required',
        ]);

        $project = new Project;
        $project
    }
}
