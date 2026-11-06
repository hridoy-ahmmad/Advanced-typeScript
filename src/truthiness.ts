type User = {
  name: string;
  age: number;
  adress?: {
    street: string;
  };
} | null;

const user: User = {
  name: "Ali",
  age: 24,
  adress: {
    street: "ABC",
  },
};

const userResult = (user: User) => {
  if (user && user.adress) {
    // console.log(user.adress.street);
  } else {
    throw new Error("User Not Found");
  }
};
userResult(user);
