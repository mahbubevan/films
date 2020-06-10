# Film Review System

## Tech Stack : _ Laravel, _ React-JS, \* MySQL

## Description About This System:-

```
* React JS use in the front and Laravel use in the back.
* React communicate with Larvel through API's.
* API's are secured with Laravel Passport.
* User can do registration with registration
* User can logged in.
* Logged in user can comment's multiple and in multiple films.
* Logged in user can add new film with multiple genres list and by thumbnail photo uploading.
* Tried to cover everything in this documentation.
Go through the details following to have better understanding.
```

# Backend

## Database Model List :-

-   User - Laravel Default
-   Film - Name (str) , Description (str), Release_Date (date), Rating (str), Price (double), Ticket ( str ['available','not_available']), Country (str), Photo (str), Timestamps,Softdeletes.
-   Genre - Name (str) , Timestamps, Softdeletes.
-   Comment - Comment (str), User_Id (fk,'users_table'), Film_Id (fk, 'films_table'), Timestamps, Softdeletes.

-   Additional has 1 `Pivot Table - film_genre` for Film and Genre Many To Many Relationships.
-   And has multiple tables for `Laravel Passport - Used for API Authentication`

## Database Model Relationship :-

-   User -> Comment :- One To Many [1 user can comment multiple, But 1 comment belongs to 1 User]
-   Film -> Comment :- One To Many [1 film can have multiple comments, But 1 comments belongs to 1 Film]

-   Film <-> Genre :- Many To Many [1 Film can have multiple genre, Multiple genre can have 1 film]
-   Film - User :- This relation is not direct. If a user comment on some film's then we can acheive the user's list who commented on specific film. It also can possible to track which user reviewed specific movie if user do comment.

# API's :-

> API route's are authenticated by laravel passport.
> Direct and nested API.

## API List :-

## Film Routes

---

-   Route::resource('films', 'FilmController');
-   Route::resource('films.comments', 'FilmCommentController', ['only' => ['index']]); // Comment list for specific film
-   Route::resource('films.users', 'FilmUserController', ['only' => ['index']]); // User List For Specific Film where user commented
-   Route::resource('films.genres', 'FilmGenreController', ['only' => ['index', 'store']]); // Genres List For Specific Films

---

## Genre Routes

---

-   Route::resource('genres', 'GenreController', ['only' => ['index', 'show']]);

---

## Comments Routes

---

-   Route::resource('comments', 'CommentController', ['only' => ['index', 'show', 'store']]);

---

## User Routes

---

-   Route::resource('users', 'UserController');
-   Route::resource('users.comments', 'UserCommentController', ['only' => ['index']]); //Specific User's Comments list
-   Route::resource('users.films', 'UserFilmController', ['only' => ['index']]); // Flim list In Which specific user Have Commented
-   Route::post('usersinfo', 'UserController@getUserByEmail')->name('userbyemail');

---

# Frontend

## Folder Structure

```js --
components-- > Film-- > AddFilm.js;
Film.js;
FilmList.js;
Login-- > Login.js;
Navbar-- > Navbar.js;
Registration-- > Registration.js;
Welcome-- > Welcome.js;
App.js;
```

## Forntend Routes

```Navbar - If user is not authenticated. It contains 3 Links
       * Home
       * Login
       * Registration
   Navbar - If user is authenticated. It contains 4 Links
       * Home
       * Filmlist
       * Add New Film
       * Logout
```

-   localhost - Welcome page with navbar and have jumbotron with title "Welcome to film reveiw site"
-   localhost/user/login - Login Page
-   localhost/user/registration - Registration Page
-   localhost/filmlist - It has 3 movie list in a card img view with Movie Name, Country, Movie thumbnail and Details Button to got specific movie page. And has Next and Previous Button for paginate. This page also contains the counting ( ex:- total records of film, result showing (1 to 3), current page (1 of 6) )
-   localhost/film/{movie_name} - Left side has Film Details with thumbnail, genres. Right side has this movie related Comments with Commentor name and Timesince (ex:- 10 hours ago)
-   localhost/addnewfilm - Can add new film with Selecting Multiple Genres and only a photo for the movie which uses as Thumbnail.
-   logout revoked the access_token and delete user sessions from localstorage.

## Generated Database Seeder For Automate Faker Data.

# Some screenshot --

![Image](https://dl.dropboxusercontent.com/s/slmmmqq1q15615v/Screenshot%202020-06-10%20at%204.22.36%20PM.png?dl=0)
![Image](https://dl.dropboxusercontent.com/s/tdr88dt27l0t332/Screenshot%202020-06-10%20at%204.23.04%20PM.png?dl=0)
![Image](https://dl.dropboxusercontent.com/s/ko5tezwet1vz7lr/Screenshot%202020-06-10%20at%204.23.16%20PM.png?dl=0)
![Image](https://dl.dropboxusercontent.com/s/k9ecbsha9z0yfbb/Screenshot%202020-06-10%20at%204.23.23%20PM.png?dl=0)
![Image](https://dl.dropboxusercontent.com/s/82mhcs7c89zvhri/Screenshot%202020-06-10%20at%204.23.45%20PM.png?dl=0)
![Image](https://dl.dropboxusercontent.com/s/ryicvh0ok7pyzb9/Screenshot%202020-06-10%20at%204.24.23%20PM.png?dl=0)
![Image](https://dl.dropboxusercontent.com/s/q22rgk6rj4fwmk3/Screenshot%202020-06-10%20at%204.25.24%20PM.png?dl=0)

# A video link to watch the functionalities

[Link](https://youtu.be/aoS3gyzeFHA)
