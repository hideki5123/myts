export { };

// --- Identity Functions ---
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity("TestString");
let output2 = identity(100);
let output3 = identity(true);
let output4 = identity([1, 2, 3]);
let output5 = identity({ name: "John", age: 30 });

let output6 = identity<string>("explicit string");
let output7 = identity<number>(100);
let output8 = identity<boolean>(true);
let output9 = identity<number[]>([1, 2, 3]);
let output10 = identity<any>({ name: "John", age: 30 });

console.log(`output1: ${output1}`);
// output1: TestString

console.log(output1, typeof output1);
console.log(output2, typeof output2);
console.log(output3, typeof output3);
console.log(output4, typeof output4);
console.log(output5, typeof output5);
console.log(`\n`);

console.log(output6, typeof output6);
console.log(output7, typeof output7);
console.log(output8, typeof output8);
console.log(output9, typeof output9);
console.log(output10, typeof output10);

/*
TestString string
100 number
true boolean
[ 1, 2, 3 ] object
{ name: 'John', age: 30 } object


explicit string string
100 number
true boolean
[ 1, 2, 3 ] object
{ name: 'John', age: 30 } object
*/

// --- Generic array functions ---
function logArrayFirstElement<T>(arr: T[]): void {
    if (arr.length > 0) {
        console.log(`First element: ${arr[0]}`);
    } else {
        console.log("Array is empty.");
    }
}

console.log("\nLogging Array First Elements:");
logArrayFirstElement([1, 2, 3]);
logArrayFirstElement(["a", "b", "c"]);
logArrayFirstElement([{ name: "Alice" }, { name: "Bob" }]);
logArrayFirstElement<boolean>([true, false]);
logArrayFirstElement([]);

/*
First element: 1
First element: a
First element: [object Object]
First element: true
Array is empty.
*/

// --- Generic class ---
class Obj<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent;

    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

let stringObj = new Obj<string>("Hi generics!");
let numberObj = new Obj<number>(123);
let booleanObj = new Obj(true);
let arrayObj = new Obj([1, 2, 3]);
let objectObj = new Obj<{ name: string; age: number }>({ name: "John", age: 30 });

console.log("\nGeneric Class Outputs:");
console.log(`string object: ${stringObj.getContent()}`);
stringObj.setContent("Updated string");
console.log(`updated stringObj: ${stringObj.getContent()}`);

console.log(`number object: ${numberObj.getContent()}`);
numberObj.setContent(456);
console.log(`updated numberObj: ${numberObj.getContent()}`);

console.log(`boolean object: ${booleanObj.getContent()}`);
booleanObj.setContent(false);
console.log(`updated booleanObj: ${booleanObj.getContent()}`);

console.log(`array object: ${arrayObj.getContent()}`);
arrayObj.setContent([4, 5, 6]);
console.log(`updated arrayObj: ${arrayObj.getContent()}`);

// 'objectObj.getContent()' will use Object's default stringification format ('[object Object]') when stringified.sonarqube(typescript:S6551)
console.log(`object object: ${objectObj.getContent()}`);
objectObj.setContent({ name: "Alice", age: 25 });
console.log(`updated objectObj: ${objectObj.getContent()}`);

/*
string object: Hi generics!
updated stringObj: Updated string
number object: 123
updated numberObj: 456
boolean object: true
updated booleanObj: false
array object: 1,2,3
updated arrayObj: 4,5,6
object object: [object Object]
updated objectObj: [object Object]
*/

// -- Generics Interfaces ---
interface Pair<K, V> {
    key: K;
    value: V;
}

let pair1: Pair<number, string> = { key: 1, value: "One" };
let pair2: Pair<string, boolean> = { key: "isActive", value: true };

console.log("\nGeneric Interface Examples::");
console.log(pair1);
console.log(pair2);

/*
{ key: 1, value: 'One' }
{ key: 'isActive', value: true }
 */