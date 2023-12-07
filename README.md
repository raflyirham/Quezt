![Logo](https://i.ibb.co/M9x1K3r/quezt-logo-header.png)

# Quezt

Quezt merupakan website untuk belajar dan tanya jawab materi perkuliahan. Jawaban yang diberikan pada website ini merupakan tutor yang memiliki kompetensi sesuai dengan aturan dan standar website ini.

## Live Preview

https://quezt.live/

## Installation

Clone the project and move to the project directory.

```bash
  git clone https://github.com/raflyirham/Quezt.git
  cd Quezt
```

Install dependencies.

```bash
  composer install
  npm install
```

Create the .env file by copying the .env.example file.

Generate Laravel project key.

```bash
  php artisan key:generate
```

Migrate and seed the database (please setup your database first and edit the .env file according to your database detail.).

```bash
  php artisan migrate:fresh --seed
```

Run the project (please use seperate command prompts).

```bash
  php artisan serve
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`GOOGLE_RECAPTCHA_KEY`

`GOOGLE_RECAPTCHA_SECRET`

`AWS_ACCESS_KEY_ID`

`AWS_SECRET_ACCESS_KEY`

`AWS_DEFAULT_REGION`

`AWS_BUCKET`

This project uses Google's ReCaptcha V2 to prevent bots, and Amazon Simple Storage Service (S3) to store images.

You may still able to run the project without Amazon S3, but some feature such as avatar image upload may not be available.

## Features

- Ask question
- Answer question
- Search question
- Profile page
- Profile avatar
- Avatar image upload
- Multi roles
- View courses
- View majors

## Todo

- [ ] WYSIWYG text editor
- [ ] Find tutors
- [ ] Product page

## Built With

- [![Laravel][Laravel]][Laravel-url]
- [![React][React.js]][React-url]
- [![Tailwind][TailwindCSS]][TailwindURL]
- [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[Laravel]: https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindURL]: https://tailwindcss.com/
