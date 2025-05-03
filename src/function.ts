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
}

myObject.increment(); 
myObject.increment(); 
myObject.increment(); 

/*
Incrementing value from 10
Incrementing value from 11
Incrementing value from 12
*/


// const myObjArrow: MyData = {
//     value: 20,
//     increment: () => {
//         console.log(this.value);
//     }
// }
// myObjArrow.increment(); // undefined

export {};