// write a variable that is a string and output to console (hint: it's console.log(variable name))
var stringExample = "String";
console.log(typeof stringExample);
// write a variable that is a number and output to console (hint: it's console.log(variable name))
let varExample = 50;
console.log(`${numExample}`);
// write a variable that takes any two numbers and adds them 
let x = 20;
let y = 30;
let addExample = x+y;
// write a variable that takes any two numbers and subtracts them and output to console
let subtractExample = x-y;
console.log(`${subtractExample}`)
// write a variable that takes any two numbers and performs a modulo that has a value of 1 and output to console 
let modulosExample = x%y;
console.log(`${modulosExample}`);
// write a variable that takes any two numbers and perform an exponential value and output to console 
let exponentiationExample = x**2;
console.log(`${exponentiationExample}`);
// write a statement that is false using a conditional statement and output to console 
if (x>y) {
    console.log("This statement is super duper false!")
} else {
    //nada
}

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

// console.log the values of that object one by one. 

// create an array 
let arrayExample = ["1", 1, "0", 0]
// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

// call all values in the array using a loop 

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}