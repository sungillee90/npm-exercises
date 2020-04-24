// todo - Write a function named sayHello using a arrow function, that logs hello to the console. Then call that function.

const $ = require('jquery');

// trying to connect the key files into the this js file
const keys = require("./keys");
console.log(keys);

import mindblowingMath from './math.js';

console.log(mindblowingMath.add(10,5));

const niceMessage = require('./say-hello');
console.log(niceMessage('sung'));

// one liner arrow function.
const person = { firstName: 'sung'}
const { firstName } = person;
const sayHello = person  => `hello ${person.firstName}. again`;

console.log(sayHello(person));

// console.log('hello');

$(document).ready( () =>{
   $('body').html(sayHello(person));
});