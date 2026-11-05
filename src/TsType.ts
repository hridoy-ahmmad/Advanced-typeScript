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
  //   console.log(b.toUpperCase());
}

// literal Type
type Status = "pending" | "complete";
let status: Status = "pending";
// once more 😁
let name: "abdul" | "babul" = "babul"; // in one line

//  Type Assertion

type userStatus = "pending" | "approved" | "rejected";

const UserStatus: string = "rejected";

const userResult = (UserStatus: userStatus) => {
  console.log(UserStatus);
};

userResult(UserStatus as userStatus);

// non-null assertion

interface Config {
  port?: number;
}
const config: Config = {
  port: 3000,
};

// 3 solves 
// const currentPort: number | undefined = config.port;
// const currentPort: number  = config.port!;
const currentPort: number = config.port as number;
console.log(currentPort);
