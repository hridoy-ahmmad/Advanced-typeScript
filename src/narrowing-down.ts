// typeof and type guard

const value = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value;
  } else {
    return value;  // value never type 
  }
};
