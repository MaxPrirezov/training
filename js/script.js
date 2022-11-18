"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

  while (
    numberOfFilms == "" ||
    numberOfFilms == null ||
    numberOfFilms.length > 10 ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Вы мал");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("вы класс");
  } else if (personalMovieDB.count > 30) {
    alert("вы киноман");
  } else {
    alert("вы ошибка");
  }
}

detectPersonalLevel();

function rememberMyFilms() {
  for (var i = 1; i <= 2; i++) {
    let a;
    do {
      a = prompt(`Какой ${i} фильм вы смотрели?`, "");
    } while (a == "" || a == null || a.length > 50);

    let b;
    do {
      b = prompt(`От 1 до 10 как вам ${i} фильм?`, "");
    } while (b == "" || b == null || b.length > 2 || isNaN(b));

    personalMovieDB.movies[a] = b;
  }
}
rememberMyFilms();

function showMyDB(a) {
  if (!a) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  let a;
  for (var i = 1; i <= 3; i++) {
    do {
      a = prompt(`Какой ${i} ваш любимый жанр?`, "");
    } while (a == "" || a == null || a.length > 50);

    personalMovieDB.genres.push(a);
  }
}
writeYourGenres();
showMyDB(personalMovieDB.privat);
