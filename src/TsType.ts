// Top Type

let a: any = "Hello";
a = 123;
a = true;
a = undefined;

let b: unknown = "hello";
b = 100;
b = false;
//  Must check the type while assigning unknown Variable
// console.log(b.toUpperCase());

if (typeof b === "string") {
  console.log(b.toUpperCase());
}

// literal Type
type Status = "pending" | "complete"
let status: Status = 'pending'
// once more 😁
let name: 'abdul' | 'babul' = "babul"  // in one line

