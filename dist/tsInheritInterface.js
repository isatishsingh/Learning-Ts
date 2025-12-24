"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let branch = {
    branchName: "Surat Branch",
    branchId: "C201426ba",
};
let user = {
    name: "Satish Singh",
    age: 16,
    address: {
        city: "Surat",
        state: "Gujarat",
        pinCode: 395009,
    },
};
function checkDetails(user) {
    return user.age >= 18 ? true : false;
}
let output = checkDetails(user);
if (output) {
    console.log("You are legally allowed to drive");
}
else {
    console.log("You are not allowed to drive");
}
//# sourceMappingURL=tsInheritInterface.js.map