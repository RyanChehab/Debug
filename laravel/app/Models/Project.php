<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'name',
        'color'
    ];

    public function users(){
        return $this->belongsToMany(User::class,'project_user','project_id','user_id');
    }
}
