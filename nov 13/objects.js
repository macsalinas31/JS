// Objects
// an entity with properties

// Object literal kahit curly brace not code block
//key-value pair

// property: value

const person =  {
    firstName:   "Joshua", // kahit anong data type
    lastName:    "Betco",
    age:          26,
    gender:      "Male"
}

// console.log(person["firstName"]);

console.log(person.firstName); // dot.Notation
console.log( `${person.firstName} ${person.lastName}`);

person.isAdmin = true;

let i = 3;

while (i) {
    alert (i--);

}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
for (let i = 1; i < 9; i++) {
    let print;
    for (let j = 1; j < i; j++){
        print += "";
    }
    console.log(print);
  }

  let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 

const letters = [3, 2, 4, 1, 5];
const reverseArray = letters.reverse() {

    reversed[0] = 5;
    console.log(numbers[0]);

    }
    const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
 // 5

 const letters = ['a', 'b', 'c', 'd'];
const reversedArray = letters.reverse();
console.log(reversedArray);
const letters = ['a', 'b', 'c', 'd'];
const reversedArray = reverse(letters);{
    console.log(reversedArray);
}

const 

const reversedArray = array.reverse();{
    let array = ['a', 'b', 'c', 'd'];
    console.log(reversedArray);
}