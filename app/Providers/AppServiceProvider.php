<?php

namespace App\Providers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Validator::extend(
            'recaptcha',
            'App\\Validators\\ReCaptcha@validate'
        );

        if ($this->app->environment('production')) {
            \URL::forceScheme('https');
        }

        Inertia::share([
            'config' => [
                'google_recaptcha_key' => config('recaptcha.key'),
            ],
        ]);
    }
}
