<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Inertia\Inertia;

class TutorController extends Controller
{
    public function index()
    {

        $users = User::all();

        $tutors = array();

        foreach ($users as $user) {
            if ($user->userroles()->where('RoleID', 2)->exists()) {
                array_push($tutors, $user);
            }
        }

        $tutors = $this->paginate($tutors, 8);

        return Inertia::render('Tutor/Index', [
            'tutors' => $tutors,
        ]);

    }

    public function paginate($items, $perPage = 5, $page = null, $options = ["path" => "/tutor"])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
