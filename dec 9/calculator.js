const num1 = parseFloat(prompt('Enter the first number: '));  

const operator = prompt('Enter the operator ( +, *, -, /): ');  

const num2 = parseFloat(prompt('Enter the second number: '));  
  
let result; 

if(isNaN(num1) || isNaN(num2)){
    alert('Wront Input! Numbers only! Refresh Again')
}

else {

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
    alert('Oppps!!  Operator is not correct please restart!');
}
}


document.write(num1 + operator + num2 + '=' + result); 
