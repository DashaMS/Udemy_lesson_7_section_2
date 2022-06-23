"use strict";

// allert('Hello');

//let result = confirm('Are you here?');
//console.log(result);
/* let answer = +prompt('Are you 18 years old?', '');
console.log(answer+5);
const answers = [];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('How old are you?', '');

document.write(answers);

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);
const user = 'Ivan';
alert(`Hello, ${user}`);

const stark = 'Arya';
alert(`Do you want to eat, ${stark}?`);

let products = 'banana, apple, cherry';
console.log(`${products}, cucembers`);

document.write(`${products}, cucembers`);


let incr = 10,
    decr = 10;

++incr;
--decr;

console.log(incr);
console.log(decr);

console.log(25 % 6);

console.log(2+ 2 * 2 != '6');

const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
*/
// перша задача, 19 урок
const number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('на сколько оцените его', ''),
    c = prompt('Один из последних просмотренных фильмов', ''),
    d = prompt('на сколько оцените его', '');


personalMovieDB.movies[a] = b;

personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
