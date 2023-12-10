<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->user() == null) {
            return Inertia::render('Error', [
                'status' => 403,
            ])->toResponse($request)->setStatusCode(403);
        }

        if (auth()->user()->RoleID != 3) {
            return Inertia::render('Error', [
                'status' => 403,
            ])->toResponse($request)->setStatusCode(403);
        }

        return $next($request);
    }
}
