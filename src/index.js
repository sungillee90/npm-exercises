// todo - Write a function named sayHello using a arrow function, that logs hello to the console. Then call that function.

const $ = require('jquery');

// function sayHello () {
//     console.log('hello');
// }
// sayHello ();

// one liner arrow function.
const person = { firstName: 'sung'}
const { firstName } = person;
const sayHello = person  => `hello ${person.firstName}. again`;

console.log(sayHello(person));

// console.log('hello');

$(document).ready( () =>{
   $('body').html(sayHello(person));
});