// Top Type
/* Any and unknown*/
let anyType = "Hello World";
anyType = 1234;
anyType.length;
let unknownType = "Hello";
unknownType = 123;
// unknownType.length // err
// core type
let sumthing;
const num = 1234;
sumthing = num;
// const user: User = null; // Not allowed to use different branch item
const user = null;
// Unit type
const greetings = (name) => {
    name; // void
    return name; // perfect because of return
};
greetings("name");
export {};
