let num1 = 10;
let printValue;
num1 = 21;

if (num1 > 10 && num1 < 20) {
    printValue = "The value of num1 is greater than 10 and less than 20";
}

else if (num1 == 10 || num1 == 21) {
    printValue = "The value of num1 is equal to 10 or equal to 21";
}
else if (num1 > 5) {
    printValue = "The value of num1 is greater than 5";
}
 else {
    printValue = "The value of num1 is less than 10";
}
console.log(printValue);


//
let printStatus;
const age = 25;

// if(age >= 18) {
//     printStatus = "Approve";
// }
// else {
//     printStatus = "Disapprove";
// }


// Ternary operator ? :
printStatus = (age >= 18) ? "Approve" : "Disapprove";
console.log(printStatus);


// let hourOfDay = prompt("Enter the hour of day");
const hourOfDay = new Date().getHours();
let greeting;

if (hourOfDay >= 4 && hourOfDay < 12) {
    greeting = "Good Afternoon!";
}
else if (hourOfDay >= 12 && hourOfDay <= 18) {
    greeting = "Good Afternoon!";
}
else {
    greeting = "Good Evening!";
}

console.log(hourOfDay);
console.log(greeting);

const day = "Friday";

switch(day) {

    case "Monday":
        console.log("Today is Monday");
        break;
    case "Friday":
        console.log("Happy weekend!");
        break;
    default:
        console.log("Today is unknown");
}   
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     sum = sum + i;
// }


// Loops

let num = 0;

// while (num < 10) { // condition
//     console.log(num);
//     num++; // increment
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 10);

for (let i = 0; i < 10; i++) {
    console.log(i);
// check if even numbers
    if(i % 2 == 0) {
        console.log(i);
    }

}
