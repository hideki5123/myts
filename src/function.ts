export {};

type MathOperation = (x: number, y: number) => number;


const addNumbers: MathOperation = (a, b) => {
    return a + b;
}

// Abbreviations for the Arrow function
const substract: MathOperation = (x, y) => x - y;

console.log(`${addNumbers.name}(5,3) = ${addNumbers(5,3)}`);
console.log(`${substract.name}(5,3) = ${substract(5,3)}`);

/*
addNumbers(5,3) = 8
substract(5,3) = 2
*/

// --- optional parameters ---
function greet(name: string, title?: string): string{

    return title ? `Hello ${title} ${name}` : `Hello ${name}`;

    // if(title) {
    //     return `Hello ${title} ${name}`;
    // } else {
    //     return `Hello ${name}`;
    // }
}

console.log(greet("John"));
console.log(greet("Sato", "Mr."));

/*
Hello John
Hello Mr. Sato
*/

// --- default parameters ---
// Compute exponent power of base
function power(base: number, exponent: number = 2): number{
    let result = Math.pow(base, exponent);
    console.log(`${power.name}(${base}, ${exponent}) = ${result}`);
    return result;
}

power(10);
power(2, 3);

/*
power(10, 2) = 100
power(2, 3) = 8
*/

// --- rest parameters ---
function sumAll(...numbers: number[]): number{
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    console.log(`${sumAll.name}(${numbers}) = ${total}`);
    return total;
}

sumAll(1, 2, 3, 4, 5);
sumAll(10, 20, 30, 40, 50);
sumAll(100, 200, 300, 400, 500,);
sumAll();

/*sumAll(1,2,3,4,5) = 15
sumAll(10,20,30,40,50) = 150
sumAll(100,200,300,400,500,600) = 2100
sumAll() = 0
*/

// --- function overloading ---
// The difference between the behaviour of this in normal and arrow functions is an important JavaScript concept.
// In TypeScript you can annotate the type of this by writing this as the first argument of a function (it disappears at compile-time)

interface MyData{
    value: number;
    increment: () => void;
}

const myObject: MyData = {
    value: 10,
    increment: function(this: MyData) {
        console.log(`Incrementing value from ${this.value}`);
        this.value++;
    }

    // **Conclusion:** If you want to use `this` within a method of an object to refer to the object itself,
    // define the method with the `function` keyword instead of the Arrow function, and
    // It is safe and common to use TypeScript's `this` type annotation (`function(this: Type)`).
    // increment: () => {
    //     console.log("Inside arrow function: 'this' does not refer to myCounterArrow");
    // }
}

myObject.increment(); 
myObject.increment(); 
myObject.increment(); 

/*
Incrementing value from 10
Incrementing value from 11
Incrementing value from 12
*/


// const myCounter = {
//     currentValue: 0,
//     increment: function() {
//       this.currentValue++; // this が myCounter を指すことを期待
//     }
//   };
  
//   const incrementFn = myCounter.increment;
//   incrementFn(); // Error
/*
TypeError: Cannot read properties of undefined (reading 'currentValue')
    at increment (D:\workspace\code\ts-learning\dist\function.js:73:9)
    at Object.<anonymous> (D:\workspace\code\ts-learning\dist\function.js:77:1)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49
*/
