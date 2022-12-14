// Array [ INDEX yung order ng item start in 0 1 2] 
// max index = total no. of items ~ 1
// let betlog = ('asdjaisdjsoa ' + "asmkmasdm")
//Array literal
const fruits = ["apple", "orange", "papaya", "dragonfruit" ];

// console.log(fruits);
//arrayName[index order]
console.log(fruits[3] );

// empty array
// const prutas = [];
const prutas = new Array();

prutas[0] = "langka";
prutas[1] = "Pineapple";
prutas[2] = "Guyabano";

prutas[0] = "Mango";

prutas.push("Banana", "Calamansi", "Suha");  //if function tandaan always may () parenthesis

console.log(prutas);

const scores = [50, 37.5, 99, 100];

for (let i = 0; i < scores.length ; i++) {
    console.log( scores[i]);
    
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
// callback functions: function use as argument
numbers.forEach(  // [ kada isa dito]
    (number) => {
     sum += number;       
    }
 );

 console.log(sum);

 const months = ["January", "February", "March", "April"];
 months.forEach(
    (element, index) => {
        // console.log( `Index: ${index} - ${element}` );
    }
 );

 //array.push - add item at the end of array
 months.push("May");
 // array.pop() - remove item at the end of array, return the remove item
console.log(months);

console.log(months.pop() );
console.log(months);

// shift and unshift()
//array.unshift - add item at the start of array Vice versa of array.push
months.unshift("First");
console.log(months);
//array shift() - remove item at the start array return the removed item
console.log( months.shift());
console.log(months);

const lottoNumbers = [1, 2, 3, 4, 5, 6];
const leaderboard = ["Shai", "Jamie", "Glenn", "Kenn", "Jason"];
// get value of index 0 / top 1
// Correct the spelling of "Jamie" to "Jaime"
//Replace "Jason" to "Ringgo"
function fizzBuzz (n) {
    const answer = []
    for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0)
    answer.push("FizzBuzz")
    else if (i % 3 == 0)
    answer.push("Fizz")
    else if (i % 5 == 0)
    answer.push("Buzz")
    else
    answer.push(i.toString())
    }
    return answer
    };
    console.log(fizzBuzz(14))

    let i;
    for (i=1; i<=100; i++)
    {
        
        if (i%15 == 0)   
            document.write("FizzBuzz" + " ");
         
        
        else if ((i%3) == 0)
            document.write("Fizz" + " ");               
         
        
        else if ((i%5) == 0)                   
            document.write("Buzz" + " ");               
     
        else   
            document.write(i + " ");               
    }
 

    function fizzBuzz (n) 
    { const answer = [] 
        for (let i = 1; i <= n; i++) 
        { if (i % 3 == 0 && i % 5 == 0) answer.push("FizzBuzz") 
        else if (i % 3 == 0) answer.push("Fizz") 
        else if (i % 5 == 0) answer.push("Buzz") 
        else answer.push(i.toString()) } 
        return answer }; 
        console.log(fizzBuzz(14))
