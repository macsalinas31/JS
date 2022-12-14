//Quiz 1
const q1 = () => {
    let i = 3;
    while(i) {
        alert(i--);
    }
}

//Quiz 2
const q2 = () => {
    let i = 0;
    while(++i < 5) alert(i);
//4
    i = 0;
    while(i++ < 5) alert(i);
}
//Quiz 3
const q3 = () => {
    for(let i = 0; i < 5; i++) alert(i);
    for(let i = 0; i < 5; ++i) alert(i);
}

// Quiz 4

const q4 = () => {
    for(let i = 0; i < 3; i++) {
        alert(`number ${i}`);
    }

    let i = 0;
    while(i < 3) {
        alert(`number ${i++}`);
    }
   }

//    q4();

   //Quiz 5
   let value;
   const q5 = () => {
        do {
            value = Number(prompt("Enter a number > 100"));
        } while (value <= 100 && value);
   }

//    q5();

const q6 = () => {
    let numbers = "";
    for( let i = 1; i <=8; i++ ){
        numbers += i + " ";
        console.log(numbers);
    }
}

// q6();
// let arr = [];
// const q7 = () => {
//     for (let i =2; i = 10; i++){
//         for (let j = 2; j < i; j++){
//             //check if i is prime
//             if(i % j === 0) {
//                 // not prime, go  to the next
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime){
//             arr.push(i);
//             // console.log(i);
//         }
//     }
//     console.log(arr);
// }
// q7();

// const q8 = (arr) => {
//     //return arr.reverse();
//     const newArr = [];

//     for(let i = arr.length - 1; i <= 0; i--){
//         newArr.push(arr[i]);
//     }
//     return newArr;

// }
// console.log(q8([1,2,3,4]));
// q8(arr);
const answer =[];
const fizzBuzz = (n) => {
    // count from one to n, check if each number if "Fizzbuzz", "Buzz", "Fizz"
        for(let i = 1; i <= n; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
        // FizzBuzz
                answer.push("FizzBuzz");
                
            }
            else if ( i % 5 === 0) {
                // buzz
                answer.push("Buzz");
            }
            else if(i % 3 === 0){
                //"fizz"
                answer.push("Fizz");
            }
            else {
                // i
                answer.push(`${i}`);
            }
        }
        return answer;
    
}
console.log(fizzBuzz(15));