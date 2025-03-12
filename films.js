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
function orderByYear(movies) {
  let orderedMoviesYear = movies.map((movie) => movie).sort();
  orderedMoviesYear.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  console.log("Exercicio 5 ", orderedMoviesYear)
  return orderedMoviesYear;

}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(movies, movieCategory) {  
  
    let moviesFromCategory = movies.filter((movie) => movie.genre.includes(movieCategory));
    
    let {averageScore, movieCount} = moviesFromCategory.reduce((acc, movie) => {
      acc.averageScore += movie.score;
      acc.movieCount++;
    
      return acc;
    }, {averageScore: 0, movieCount: 0});
    
    if (movieCount === 0 ) {
      return 0;
    }
    
    return Math.round((averageScore / movieCount) * 100) / 100;
}

// Exercise 7: Modify the duration of movie)
function hoursToMinutes(movies) {
  let newMovieArray = movies.map((movie) => {
    let duration = movie.duration;
    let totalMinutes = 0;

    if (duration.includes("h")) {
      let hours = parseInt(duration.split("h")[0])
      totalMinutes += hours * 60;
    }

    if (duration.includes("min")) {
      let minutes = parseInt(duration.split("min")[0].split(" ").pop());
      totalMinutes += minutes;
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return newMovieArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let moviesFromYear = movies.filter((movie) => movie.year === year);
  let bestMovieYear = moviesFromYear.sort((a, b) => b.score - a.score)[0];

  return [bestMovieYear];
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
