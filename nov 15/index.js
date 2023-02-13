// Modern Javascript Features
// ECMA yung nag dedevelop ng Javascript sila nag mamaintain


// Default Parameters ()
// this is the old way
const add = (num1, num2) => {
    num2 = typeof num2 !== 'undefined' ? num2 : 0;
    return num1 + num2;
}
// console.log( add(15));
// parameter is like a variables
const multiply = (num1, num2 = 1) => {
    return num1 * num2;
}
// console.log( multiply(99));
// console.log( multiply(99, 2));

//Spread syntax
const nums = [5, 4, 3, 2, 1];
// for function calls
Math.min(...nums);
// Math.min(...nums);

// in array literals, creating a new array using existing array
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const arr1 = [ ...nums1, ...nums2 ];
// [1, 2, 3, 4, 5, 6]
const arr2 = [ "a", "b", ...nums2 ];
// ["a", "b", 4, 5, 6]
const arr3 = [...nums1, ...nums2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1);
console.log(arr2);
console.log(arr3);

// in object literals
// copy property from object to another
const feline = { family: "Felidae", legs: 4};
const canine = { family: "Canidae", hasTail: true};

const dog = { 
    ...canine, 
    isPet: true
};
// { family: "Canidae", hasTail: true}, isPet: true}
const catDog = {
    ...canine,
    ...feline
}
// {family: "Felidae", hasTail: true, legs: 4}
console.log(dog);
console.log(catDog);

// Rest Parameter(s)
// get all remaining arguments into an array
const getSum = (message, ...numbers) => {
    let sum = 0;
    for(let n of numbers) {
        sum += n;
    }
    console.log(message);
    return sum;
    

}
console.log( getSum(1, 3)); //3
console.log(getSum(1,2,3,4,5)); //15
console.log(getSum("Hello", 1,2,3,4,12,2,2,2,3,2,1,8))
// console.log(getSum( 1,2,3,4,12,2,2,2,3,2,1,8, "Hello")) will get the sum of 1,2,3
//Destructure / Destructuring

// Array Destructuring

const highestMMR = [ "Jason", "Jam", "Raymart" ];

//old way
// const gold = highestMMR[0];
// const silver = highestMMR[1];
// const bronze = highestMMR[2];

// new way
const [gold, silver, bronze] = highestMMR;
console.log(gold, silver, bronze);
// destructuring
const [highest, ...everyoneElse] = highestMMR;

console.log(highest);
console.log(everyoneElse);

// Object Destructuring
const person = {
    firstName:"Bruce",
    lastName:"Wayne",
    city:"Gotham",
    title:"Batman"
}
// const firstName = person.firstName;
// const lastName = person.lastName;
// const city = person.city;
const { firstName, lastName, city} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(city);


// Parameter Destructuring
// const getFullName = (object) => {
//     return `$(object.firstName) ${object.lastName}` 
// }
const getFullName = ( {firstName, lastName}) => {
    return `${firstName} ${lastName}`
}
console.log(getFullName(person));