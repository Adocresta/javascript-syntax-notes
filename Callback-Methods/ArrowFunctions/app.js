// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b;

const square = (num) => {
  return num * num;
};

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// Implicit return
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// arrow func
const greet = (name) => {
  return `Hey ${name}!`;
};

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// IMPLICIT RETURN
const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
