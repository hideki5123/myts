export {};

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;

console.log(Direction.Up); // 0
console.log(Direction[0]); // Up

console.log(`Value of Direction.Up: ${dir}`);
console.log(`name for Vlue 0: ${Direction[0]}`);
console.log(`name for value of Left: ${Direction[Direction.Left]}`);

dir = Direction.Right;
console.log(`validation of Direction.Left: ${dir === Direction.Right}`);

/*
Value of Direction.Up: 0
name for Vlue 0: Up
name for value of Left: Left

console.log(`validation of Direction.Left: ${dir === Direction.Left}`);
src/day7-enums-unions.ts:20:46 - error TS2367: This comparison appears to be unintentional because the types 'Direction.Right' and 'Direction.Left' have no overlap.
20 console.log(`validation of Direction.Left: ${dir === Direction.Left}`);
*/

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

enum Loglevel {
    Error = "エラー",
    Warning = "警告",
    Info = "通知ログ"
}


let level: Loglevel = Loglevel.Error;
console.log(`Log level value: ${level}`);   // Log level value: エラー

function logMessage(message: string, logLevel: Loglevel): void {
    console.log(`[${logLevel}]: ${message}`);
}

logMessage("No enough disk space", Loglevel.Warning);   // [警告]: No enough disk space
logMessage("Critical error occurred", Loglevel.Error);   // [エラー]: Critical error occurred


type CardinalDirection = "North" | "East" | "South" | "West";

let move: CardinalDirection = "North";
console.log(`\nMoving: ${move}`);

move = "East";

function moveCharacter(direction: CardinalDirection): void {
    console.log(`Character moves for ${direction}`);
}

moveCharacter(move);   // Character moves for East
moveCharacter("South");   // Character moves for South



// --- Considerations on the use of Enum and string literal unions --- --- --- --- **Enum:** Enum:** Enum:** String literal unions.
// **Enum:**
// - When compiled into JavaScript, an object is created that exists at runtime.
// (e.g. a Numeric Enum would be an object like { ‘0’: ‘Up’, ‘Up’: 0, ... })
// - This has a small runtime overhead (memory, initialisation time).
// - Automatic mapping to numeric values and reverse lookups (for numeric Enums) are available.
// - Useful when traditional enumerated type behaviour is required or when iterating over members at runtime.
//
// **String literal union (e.g. type Status = ‘A’ | ‘B’):**
// - purely a function for compile-time type checking.
// - When compiled into JavaScript, the type information disappears and no associated runtime object is created.
// (e.g. `let status: Status = ‘A’;` becomes simple JS as `let status = ‘A’;`)
// - Therefore it is ‘lightweight’ and has no runtime overhead.
// - Very useful when you simply want to constrain it to ‘any of a number of fixed strings’,
// often preferred over Enum for this purpose in TypeScript.
// - The string itself can be treated as a value, making it easier to understand, e.g. when debugging.
