'use strict';
 import * as evFunctions from "./modules/functions.js";

 evFunctions.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

 const swiper = new Swiper();


 let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

let a = prompt('Один из последних просмотренныхфильмов?', ''),
    b = +prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренныхфильмов?', ''),
    d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;  
personalMovieDB.movies[c] = d;

 console.log(personalMovieDB);


console.log('hello');