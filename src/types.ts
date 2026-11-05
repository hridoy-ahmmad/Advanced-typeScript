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

// Nulish Type

interface User {
  name: string;
}
type currentUser = User | null;
// const user: User = null; // Not allowed to use different branch item
const user: currentUser = null;

// Unit type
const greetings = (name: string) => {
  name; // void
  return name; // perfect because of return
};
greetings("name");

