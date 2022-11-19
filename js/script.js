"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: (callback) => {
    let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      numberOfFilms.length > 10 ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;
    callback();
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      alert("Вы мал");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("вы класс");
    } else if (personalMovieDB.count > 30) {
      alert("вы киноман");
    } else {
      alert("вы ошибка");
    }
  },
  rememberMyFilms: () => {
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
  },
  writeYourGenres: () => {
    let a;
    for (var i = 1; i <= 3; i++) {
      do {
        a = prompt(`Какой ваш жанр #${i}?`, "");
      } while (a == "" || a == null || a.length > 50);
      personalMovieDB.genres.push(a);
    }
    personalMovieDB.genres.forEach(function (item, i) {
      console.log(`Ваш любимый жанр №${i + 1} ${item}`);
    });
  },
  showMyDB: (a) => {
    if (!a) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyBD: () => {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};

//personalMovieDB.start(personalMovieDB.detectPersonalLevel);
//personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyBD();
