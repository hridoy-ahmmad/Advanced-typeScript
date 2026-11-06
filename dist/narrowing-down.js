// typeof and type guard
const value = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value; // value never type 
    }
};
// caveat of type guard
const print = (x) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    console.log("");
};
print("ggg");
export {};
