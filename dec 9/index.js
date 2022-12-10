// Variables
// Initialization
let age = 25;
const name = "Jose";

age = 26;
// Display functions
console.log(age);
// alert("Hello World!");
// prompt("Enter a number:");

// Data Types 
const firstName = "Joshua"; // String data type, ("",'') loob ng quotation ay string literal 
const message = `This 
is 
my message`; // String, (``) backtick, template literal pwedeng mag new line all spaces or line break makukuha as is 
const greeting = `Hello ${firstName}`; // ${ expression }
const favoriteNumber = 28; //Number data type
const average = 99.99; // Number data type pa rin kahit may decimal 
const isHappy = true; // Boolean Data type. True or false lang haha wala sa loob ng quotation mark kasi di siya string data
const isHungry = false; //Boolean data type. Ginagamit lang pag conditional when making decision
const value = null; // null
const unDef = undefined; // undefined di pa na dedefined nagawa lang yung variable per wala pang value

// Operators
const num1 = 15;
const num2 = 5;

// in console - String + (String or Number) = String
// concatenation, concatenate
//Type coercion
// Ibig sabihin dugtong lang
console.log("Number 1: " + num1 );
console.log("Number 2: " + num2 );
// \n = new line
console.log("This \n is \n another \n line"); // dating ginagamit nung wala pang template literal or backtick string


// console.log("Addition: " + num1 + num2); // need ng () pag string data kasi mababa siya as concatenation or dugtong lang

// Math operators
console.log(`Addition: ${num1 + num2}`); // prefer ang template literal para mas mabilis mabasa ang math operators // addition operator +
console.log(`Subtraction: ${num1 - num2}`); // Subtraction operator -
console.log(`Multiplication: ${num1 * num2}`); // Multiplication *
console.log(`Division: ${num1 / num2}`); // Division /
console.log(`Modulo: ${num1 % num2}`); // Remainder operator, Modulo %


let count = 10; // eto umpisa
//increment 
console.log(count++); //postfix increment dagdag
/*
    count; //call the variable
    count += 1; //increment by 1
*/
console.log(count); // eto eleven na since may increment na 
console.log(++count); //prefix increment dagdag
//decrement -- dito lumabas agad na twelve since prefix siya


console.log(count--); //postfix decrement bawas
console.log(count);
console.log(--count); //prefix decrement bawas

// More assignment operators
let sum = 0;
sum += 9; // Addition assignment +=
//sum = sum + 9;
let diff = 10;
diff -= 3; // substraction assignment -=
//diff = diff - 3;
let product = 1; 
product *= 5;   // Multi assignment *=
let quotient = 24;
quotient /= 6; //division assignment /=
let remainder = 10;
remainder %= 3//Modulo assignment %=
console.log(diff);

let number = 20;
let description;
// if statement ETO YUNG CONDITION STATEMENT
if (number >= 20) {
    description = "Number greater than 20";
}
// kailangan may if muna. bago dumating fail muna yung unang "IF"
else if (number == 19) { //kung true or false lang to if 19 ang number then true eto lalabas 19 boolean
    description = "Number is 19";
}
else {
    description = "Number is less than 20"
}

// eto hindi na siya part ng if else statement


// if (number >= 21) {
//     description = "Number greater than 20";
// }
// if (number >= 22) {
//     description = "Number greater than 20";
// }
// if (number >= 23) {
//     description = "Number greater than 20";
// }








console.log(description);

// console.log(10 > 20);
console.log("10" == 10); // true boolean (true or false)
// strict equality === tatlong equal mas mahigpit  since na detect as string type ang isa
console.log("10" === 10); // false sa boolean

// Truthy and falsy value not boolean 
 if (number) {
    console.log(number); // dahil 20 naman talaga yung number mag e-execute to else hindi
 }
const sample = "sample";
if (sample) {
    console.log("sample " + remainder);
}
let example;
if (example) {
    console.log("undefined");
}

// loops
let num = 0;
// while loop
while (num < 5) // condition pag na met ang condition
{
    // code block
    console.log(num++);
}
/*
if always true ang condition then mag run pa rin yung code

*/
// do & while loop
num = 0;
do {
    console.log(num++);
} while ( num < 5); // condition



// for loop
// for initialization
// the condition is in the middle the last for the loop to stop
for (let i = 0; i < 5; i++) {
    
    
   
  if (i === 3)  {
    console.log("The number is 3");
  }

}
// const input = Number( prompt("Enter a number: "));

// const numSample = Number("50")
// console.log(input + 50);
// console.log(input + 25);






//Function Declaration
// after add(This is called parameters) the add called variables
function add(num1, num2) {
    return num1 + num2; // this is called code block
}
// () = invoker
const sum1 = add(10, 18); // need ng () para mag function
console.log(sum1);


//Function Expression
const subtract = function (num1, num2) {
   return  num1 - num2;
}
const sub1 = subtract(200, 100);

console.log(sub1);
// Arrow function (PARAMETERS) => {CODE BLOCK}
// const multiply = (num1, num2) => {
// // other code here
// return num1 = num2;
    
// }
const multiply = (num1, num2) => num1 * num2; // arrow if one line mas mabilis
const product1 = multiply(2, 8);
console.log(product1);

const greetMe = () => alert("Hello Betlog!");
greetMe();
