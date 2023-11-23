<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="shortcut icon" href="{{ asset('assets/img/favicon.png') }}" type="image/x-icon">
    @vite('resources/css/app.css')
    @vite('resources/js/app.jsx')
    @inertiaHead
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://kit.fontawesome.com/94e5f7ff7a.js" crossorigin="anonymous"></script>
</head>

<body>
    @inertia
</body>

</html>
