const user = {
    name: "Ali",
    age: 24,
    adress: {
        street: "ABC",
    },
};
const userResult = (user) => {
    if (user && user.adress) {
        console.log(user.adress.street);
    }
    else {
        throw new Error("User Not Found");
    }
};
userResult(user);
export {};
