type Users = Record<string, number>;

const userAge: Users = {
  "reqid@": 23,
  "req@id": 45,
};
console.log(userAge);

type newUsers = Record<string, { name: string; age: number }>;

const userDetail: newUsers = {
  "reqid@": { name: "Satish", age: 35 },
  "req@id": { name: "Sahil", age: 29 },
};
console.log(userDetail);

// below is example of Map

type UserMap = Map<string, { name: string; age: number }>;

interface UserDetail {
  name: string;
  age: number;
}

const userMap: UserMap = new Map<string, UserDetail>();
userMap.set("reqid@", { name: "Rajendra", age: 30 });
userMap.set("req@id", { name: "Shivam", age: 28 });
console.log(userMap);

console.log(userMap.get("reqid@"));
