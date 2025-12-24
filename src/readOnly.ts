interface User {
  name: string;
  age: number;
}

// instead of writing read only to each field we can use 
// Readonly utility type to make entire object read only
const user: Readonly<User> = {
  name: "Satish",
  age: 22,
};

// now here we cannot change the value of the name and age in user because they are ready only
// user.name = "Rajendra"; //unComment this and see the error

const user2 = {
  name: "Sahil",
  age: 29,
};

// here i can change the value inside the user2 object because they are not readonly
user2.name = "Shivam";

// Note: you can change inner values in both objects but cannot change entire user Object like user2 = {}
// user2 = {}; // uncomment this and see the error
