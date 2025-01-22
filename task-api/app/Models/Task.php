<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Specify the table name (optional if it follows Laravel's convention)
    protected $table = 'tasks';

    // Allow mass assignment for the specified fields
    protected $fillable = [
        'title',
        'completed',
        'external_id', // If you're storing the external API task ID
    ];

    // If you want to store timestamps, this line is not needed as it is by default true
    public $timestamps = true;
}
