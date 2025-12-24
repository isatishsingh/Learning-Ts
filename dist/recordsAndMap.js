"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userAge = {
    "reqid@": 23,
    "req@id": 45,
};
console.log(userAge);
const userDetail = {
    "reqid@": { name: "Satish", age: 35 },
    "req@id": { name: "Sahil", age: 29 },
};
console.log(userDetail);
const userMap = new Map();
userMap.set("reqid@", { name: "Rajendra", age: 30 });
userMap.set("req@id", { name: "Shivam", age: 28 });
console.log(userMap);
console.log(userMap.get("reqid@"));
//# sourceMappingURL=recordsAndMap.js.map