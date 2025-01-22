<?php
namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TaskController extends Controller
{
    // POST /api/tasks
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'completed' => 'boolean',
        ]);

        // Save locally
        $task = Task::create([
            'title' => $request->title,
            'completed' => $request->completed ?? false,
        ]);

        // Post to external API
        $externalApiUrl = 'https://67913042af8442fd737958d6.mockapi.io/api/v1/tasks';
        $response = Http::post($externalApiUrl, [
            'title' => $task->title,
            'completed' => $task->completed,
        ]);

        if ($response->successful()) {
            $externalData = $response->json();
            $task->external_id = $externalData['id'];
            $task->save();
        }

        return response()->json($task, 201);
    }

    // GET /api/tasks
    public function index()
    {
        // Fetch local tasks
        $localTasks = Task::all();

        // Fetch external tasks
        $externalApiUrl = 'https://67913042af8442fd737958d6.mockapi.io/api/v1/tasks';
        $response = Http::get($externalApiUrl);

        $externalTasks = $response->successful() ? $response->json() : [];

        // Combine tasks
        $tasks = $localTasks->map(function ($task) {
            $task->source = 'local';
            return $task;
        });

        foreach ($externalTasks as $externalTask) {
            $tasks->push([
                'id' => $externalTask['id'],
                'external_id' => null,
                'title' => $externalTask['title'],
                'completed' => $externalTask['completed'],
                'source' => 'external',
                'created_at' => null,
                'updated_at' => null,
            ]);
        }

        return response()->json($tasks);
    }
}
