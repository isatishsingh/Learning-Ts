// you can now inherit the address interface everywhere you want and
// if there is any changes in the address filed than we have to make it in single place
// instead to changing it every where
interface Address {
  city?: string;
  state?: string;
  pinCode: number;
}

interface User {
  name: string;
  age: number;
  address?: Address;
}

interface Office {
  branchName: string;
  branchId: string;
  address?: Address;
}

let branch: Office = {
  branchName: "Surat Branch",
  branchId: "C201426ba",
};

let user: User = {
  name: "Satish Singh",
  age: 16,
  address: {
    city: "Surat",
    state: "Gujarat",
    pinCode: 395009,
  },
};

function checkDetails(user: User): boolean {
  return user.age >= 18 ? true : false;
}

let output = checkDetails(user);

if (output) {
  console.log("You are legally allowed to drive");
} else {
  console.log("You are not allowed to drive");
}
