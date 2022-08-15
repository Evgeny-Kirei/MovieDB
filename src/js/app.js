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

for (let i = 0; i < 1; i++) {
    let a = prompt('Один из последних просмотренныхфильмов?', ''),
        b = prompt('На сколько оцените его?', '');
   
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  
}  
   if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
    
console.log(personalMovieDB);
  



 


