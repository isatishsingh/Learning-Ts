interface User {
  name: string;
  lastName: string;
  age: number;
}

let users: User[] = [
  {
    name: "Satish",
    lastName: "Singh",
    age: 22,
  },
  {
    name: "Satish",
    lastName: "Singh",
    age: 25,
  },
  {
    name: "Sunil",
    lastName: "Singh",
    age: 19,
  },
  {
    name: "Suraj",
    lastName: "Singh",
    age: 23,
  },
  {
    name: "Sudesh",
    lastName: "Singh",
    age: 21,
  },
  {
    name: "Shashank",
    lastName: "Singh",
    age: 51,
  },
  {
    name: "Shivam",
    lastName: "Singh",
    age: 15,
  },
];

function isLegal(user: User[]) {
  let x = user.filter((item) => item.age < 18);
  x.map((item) => {
    console.log("Name of the user who is under age is", item.name);
  });
}

isLegal(users);
