const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

const a = prompt("Какой проследный фильм вы смотрели?", ""),
      b = prompt("От 1 до 10 как вам этот фильм?", ""),
      c = prompt("Какой предпоследний фильм вы смотрели?", ""),
      d = prompt("От 1 до 10 как вам этот фильм?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
};
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
