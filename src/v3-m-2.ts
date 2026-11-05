// Type Alias: Type Alias is a TypeScript feature that allows us to create a new name for a data type. It is used to define primitive, union, object, tuple, and other types.

// Interface: Interface is a TypeScript feature that allows us to define the structure or shape of an object. It specifies what properties and methods an object should have.

type ID = number | string;
type ROLE = "admin" | "user";

interface User {
  name: string;
  id: ID;
  role: ROLE;
}

const user: User = {
  name: "Abdul",
  id: 123,
  role: "admin",
};

//interface extends
interface Vehicals {
  type: string;
  brand: string;
}
interface Bike extends Vehicals {
  model: string;
  registration: string | number;
  colorCode: string | number;
}

const vehicals: Bike = {
  model: "Apche RTR 150",
  registration: "raj metro 172772",
  colorCode: "#121212",
  type: "bike",
  brand: "Apache",
};

// type intersection

type Pets = {
  species: string;
};
type Dog = Pets & {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

const dog: Dog = {
  name: "Tommy",
  age: 5,
  gender: "Male",
  species: " Canis familiaris",
};
// If two or more interfaces have the same name, TypeScript automatically merges them into a single interface. This is known as Declaration Merging.

interface myUser {
  userName: string;
}
interface myUser {
  userID: number;
}

const myuser: myUser = {
  userID: 122,
  userName: "Sharif"
};
