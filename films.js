// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let moviesFromDirector = movies.filter((movie) => movie.director === director);
  console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let {totalScore, movieCount} = movies.reduce((acc, movie) => {
    if (movie.director === director){
      acc.totalScore += movie.score;
      acc.movieCount++;
    }  
    return acc;
  }, {totalScore: 0, movieCount: 0});
  
  let finalScore = totalScore / movieCount;
  return parseFloat(finalScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let orderedMovies = movies.map((movie) => movie.title).sort();
  if (orderedMovies.length < 20) {
    return orderedMovies  
 } else {
    orderedMovies.length = 20;
 }

 return orderedMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
