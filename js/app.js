// Print messages to the console

console.log('Hi there!');
console.log('Im Cynthia');
console.log(2);


// String length

let message = 'good morning';
console.log(message.length);
//Prints: 12

console.log('bonjour'.length);
//Prints: 7

// Booleans
let WFH = true;


// Random number
 console.log(Math.random());
// Prints: 0.29085048441513317

console.log(Math.floor(6.5));
// Prints: 6

// Null
let x = null;

//Multi-line comments

/*

Add hint here

*/

// Remainder / Modulo Operator

//cacluates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);

//calculates the # of days leftover after 365/7
const daysLeftOver = 365 % 7 ;

console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");
// Prints: A year has 52 weeks and 1 days


// Variables

const currency = '$';
let userIncome = 70000; 
 
console.log(currency + userIncome + ' is more than the average income.');
//Prints: $70000 is more than the average income.

// Undefined

var a;

console.log(a);
//Prints: undefined


let name = "Cynthia";
console.log(`Hello, ${name}`); 
//Prints: Hello, Cynthia

console.log(`Jennie is ${10+2} years old.`); 
//Prints: Jennie is 12 years old.

let service = 'rent';
let month = 'Feb 28th'; 
let displayText = 'Your ' + service  + ' amount is due on ' +  month + '.';
console.log(displayText);
//Prints: Your rent amount is due on Feb 28th.


// Dot Notation for Accessing Object Properties

const apple = { 
  color: 'Red',
  price: {
    bulk: '$4/lb',
    smallQty: '$1/lb'
  }
};
console.log(apple.color);
console.log(apple.price.bulk);
console.log(apple.price.smallQty);
//Prints: Green
// $3/lb
// $4/lb


// Mutable JS Objects

const student = {
  name: 'Billy',
  score: 98,
  grade: 'A',
}
 
console.log(student);
//Prints: { name: 'Billy', score: 98, grade: 'A' }

delete student.score
student.grade = 'C'

console.log(student);
//Prints: { name: 'Billy', grade: 'C' }