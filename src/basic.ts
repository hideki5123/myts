// Type Inference
let message = "Hello, world";
let count = 10;
let isDone = false;

// count = "hoge";

// Explicit type valiables
let explicitMessage: string = "this is explicit";
let explicitCount: number = 20;
let expliitIsDone: boolean = true;

let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["a", "b", "c"];
let inferredNumbers = [4,5,6];
let inferredStrings = ["x", "y", "z"];

function add(n1: number, n2: number): number {
    let result = n1 - n2;
    console.log(result);
    return result;
}

add(5,9);

console.log(message, count, isDone);
console.log(explicitMessage, explicitCount, expliitIsDone);
console.log(numbers, strings, inferredNumbers, inferredStrings);