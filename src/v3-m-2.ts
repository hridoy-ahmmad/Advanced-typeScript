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
