"use strict";
// difference between type and interface
Object.defineProperty(exports, "__esModule", { value: true });
function greeting(greet) {
    console.log("Welcome ", greet.name);
}
let user = {
    name: "Satish Singh",
    age: 20,
};
let admin = {
    name: "Prashant Kori",
    position: "Admin",
};
greeting(user);
greeting(admin);
//# sourceMappingURL=diff.js.map