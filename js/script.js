"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

while (
  numberOfFilms == "" ||
  numberOfFilms == null ||
  numberOfFilms.length > 50
) {
  numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
}
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
};
if (personalMovieDB.count < 10) {
  alert("Вы мал");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("вы класс");
} else if (personalMovieDB.count > 30) {
  alert("вы киноман");
} else {
  alert("вы ошибка");
}
for (var i = 1; i <= 2; i++) {
  let a = prompt(`Какой ${i} фильм вы смотрели?`, "");
  a == "" || a == null || a.length > 50
    ? (a = prompt(`Какой ${i} фильм вы смотрели?`, ""))
    : console.log("успех");
  let b;
  do {
    b = prompt(`От 1 до 10 как вам ${i} фильм?`, "");
  } while (b == "" || b == null || b.length > 50);
  personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
