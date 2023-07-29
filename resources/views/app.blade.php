<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
        <style>
            .navbar-brand {
                font-family: 'Poppins', sans-serif;
            }

            body {
                background-color: white;
                font-family: 'Poppins', sans-serif;
            }
            p {
                text-align: justify;
            }
        </style>
    </head>
    <body>

        @inertia

    </body>
</html>

