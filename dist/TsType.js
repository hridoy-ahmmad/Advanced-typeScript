// Top Type
let a = "Hello";
a = 123;
a = true;
a = undefined;
let b = "hello";
b = 100;
b = false;
//  Must check the type while assigning unknown Variable
// console.log(b.toUpperCase());
if (typeof b === "string") {
    //   console.log(b.toUpperCase());
}
let status = "pending";
// once more 😁
let name = "babul"; // in one line
const UserStatus = "rejected";
const userResult = (UserStatus) => {
    console.log(UserStatus);
};
userResult(UserStatus);
const config = {
    port: 3000,
};
// 3 solves 
// const currentPort: number | undefined = config.port;
// const currentPort: number  = config.port!;
const currentPort = config.port;
console.log(currentPort);
export {};
