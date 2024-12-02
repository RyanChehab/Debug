<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function signup(Request $request){
        $validated = $request->validate([
            'name'=>'string|max:255',
            'email'=>'email|required',
            'password'=>'required',
        ]);

        $user = new User();
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->password = Hash::make($validated['password']);
        $user->save();

        return response()->json([
            'message'=> 'user registered successfully'
        ],201);
    }
}
