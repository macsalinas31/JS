const num1 = parseFloat(prompt('Enter the first number: '));  

const operator = prompt('Enter the operator ( +, *, -, /): ');  

const num2 = parseFloat(prompt('Enter the second number: '));  
  
let result; 
  
  
if (operator === '+') {   
    result = num1 + num2;  
    
}  
else if (operator === '-') { 
    result = num1 - num2;  
}  
else if (operator === '*') { 
    result = num1 * num2;  
}  
else if (operator === `/`) {  
    result = num1 / num2;
}  
else {
    alert("Operator is INVALID!");

}

document.write("Result is: " + result);  
// const num1 = prompt(`Enter first number`);
// const operator = prompt(`Enter the operator ( +, *, -, /): `);
// const num2 = prompt(`Enter second number`);

// let result;
// function add(){
//     return num1 + num2;
// }
// function sub() {
//     return num1 - num2; // this is called code block
// }
// function mul() {
//     return num1 * num2; // this is called code block
// }
// function div() {
//     return num1 / num2; // this is called code block
// }

// alert(`Result is: ` + )