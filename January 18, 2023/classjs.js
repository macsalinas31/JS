// Javascript Class Examples
// Object Oriented Programming (OOP)

//Abstraction
// Encapsulation

class Vehicle {
    constructor(color) {
        console.log(`The vehicle is ${color}`);
    }
    getEngine() {
        return 'Gas Powered';
    }
}

// new Vehicle("Red");

class Toyota extends Vehicle {
    displayType() {
        console.log('Car');
    }
}