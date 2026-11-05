// Top Type
/* Any and unknown*/

let anyType: any = "Hello World";
anyType = 1234;
anyType.length;

let unknownType: unknown = "Hello";
unknownType = 123;
// unknownType.length // err

// core type

let sumthing: unknown;
const num: number = 1234;

sumthing = num;
