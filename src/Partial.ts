interface User {
  name: string;
  age: number;
  phone: string;
  address: string;
  gender: string;
}

type UpdateSpecificDetails = Pick<User, "name" | "phone" | "address">

// and among these three fields if we want optionally update any 
// field then we use type cast it with partial
type PartialUpdateDetails = Partial<UpdateSpecificDetails>;

function updateUser(update: PartialUpdateDetails) {
    console.log("New name is ",update.name);
    console.log("New Phone number is  ",update.phone);
    console.log("New Phone number is  ",update.address);
}

updateUser({
  name: "Satish",
  phone: "9999999999"
});

console.log("");
updateUser({
  address: "New Address 1234"
});