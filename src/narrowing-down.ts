// typeof and type guard

const value = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value;
  } else {
    return value; // value never type
  }
};

// caveat of type guard
const print = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    // check x is a truthy value , because null is also an object
    for (let str of x) {
      console.log(str);
    }
    return;
  } else if (typeof x === "string") {
    console.log(x);
    return;
  }
  console.log("No value");
};
// print(["Hello", "World", "TypeScript"]);
// print("Hello World");
// print(null);

// equality
const res = (x: number | string, y: number | boolean) => {
  if (x === y) {
    // console.log(x);
    // console.log(y);
  }
};

const res2 = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "string") {
      console.log(x, "is a string");
      return;
    } else {
      console.log(x, " is an object");
      return;
    }
  }
  console.log("value is null");
};
res2(null);
res2("Hello World");
res2(["Hello", "World", "TypeScript"]);

// in operator

interface bird {
  fly: () => void;
}
interface fish {
  swim: () => void;
}

const res3 = (x: bird | fish) => {
  if ("fly" in x) {
    x.fly();
    return;
  }
  x.swim();
};
