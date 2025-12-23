// here we declare the inter face and re-use it in the entire project
// in place of every time writing the type of the user object
interface userType {
  name: string;
  age: number;
}

function details(user: userType) {
  console.log("name of the user is", user.name);
  console.log("age of the user is", user.age);
}

const user: userType = {
  name: "Satish Singh",
  age: 21,
};

details(user);
