// Literal Type

type Status = "pending";
const staus: Status = "pending";

// Basic Union
type Adress = string | number;
const adress: Adress = "abc";

// literal Union

type Role = "Employee" | "Admin" | "Manager";
const userRole: Role = "Manager";

// Object Union

type CEO = { id: number; role: "ceo"; previledges: string[] };
type Employee = { id: number; role: "user"; plans: string[] };
type Manager = { id: number; role: "manager"; managersPlans: string[] };

type Roles = CEO | Employee | Manager;
const roles: Roles = { id: 102485, role: "ceo" , previledges: ['1. Best Environment']};

