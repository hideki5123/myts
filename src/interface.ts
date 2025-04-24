interface User {
    id: number;
    name: string;
    email?: string;
    readonly isActive: boolean;
}

const user1: User = {
    id: 1,
    name: "Jone",
    isActive: true,
}

const user2: User = {
    id: 2,
    name: "Mary",
    email: "mary@example.com",
    isActive: false
}

function printUser(user: User): void {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Active: ${user.isActive}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
}

console.log("Printing Users:");
printUser(user1);
// ID: 1, Name: Jone, Email: undefined, Active: true
// email will be undefined if not provided

printUser(user2);
// ID: 2, Name: Mary, Email: mary@example.com, Active: false
// Email: mary@example.com

// ---
// primitive types: string, number, boolean, null, undefined, symbol, bigint
type UserID = number;
type UserName = string;

// Union types allow a variable to hold multiple types of values.
type StringOrNumber = string | number;

let value1: StringOrNumber = "Hello";
let value2: StringOrNumber = 42;
// Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
// let value3: StringOrNumber = true;
let value3: StringOrNumber = "true"; // Corrected to a string representation.

// Object types allow you to define the structure of an object.
type Point = {
    x: number;
    y: number;
}

const p1: Point = {x: 10, y: 20};
console.log(p1);
// { x: 10, y: 20 }
console.log(`Point: (${p1.x}, ${p1.y})`);
// Point: (10, 20)


// main difference between interface and type alias is that interface can be extended and implemented, while type alias cannot.
// However, type alias can be used to create union types and intersection types, which interface cannot do directly.
interface Box {
    height: number;
    width: number;
}
// const box1: Box = { height: 2, width: 3};

interface Box {
    scale: number;
}

// const box1: Box = { height: 2, width: 3};
// Error: Property 'scale' is missing in type '{ height: number; width: number; }' but required in type 'Box'.
// even if line 70.

const box: Box = { height: 5, width: 6, scale: 10 };
console.log(box);
// { height: 5, width: 6, scale: 10 }
// the interface Box is extended with the scale property

// type Windows { height: number, width: number };
// type Windows { depth: number };
// Error: type cannot be re-declared. Duplicate identifier 'Windows'.