'use strict';
 import * as evFunctions from "./modules/functions.js";

 evFunctions.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

 const swiper = new Swiper();


  let numberOfFilms;

  function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  }

    start();
    
     let personalMovieDB = {
         count: numberOfFilms,
         movies: {},
         actors: {},
         genres: [],
         privat: false
};

 
function rememberMyFilms () {
      for (let i = 0; i < 1; i++) {
        let a = prompt('Один из последних просмотренныхфильмов?', ''),
            b = prompt('На сколько оцените его?', '');
      
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
          i--;
        }
    }
}  
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
     console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
     console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
     console.log('Вы киноман');
    } else {
     console.log('Произошла ошибка');
    }
} 
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
  showMyDB(personalMovieDB.privat);

  function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  }
  writeYourGenres();


  


 


