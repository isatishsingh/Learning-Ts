"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(update) {
    console.log("New name is ", update.name);
    console.log("New Phone number is  ", update.phone);
    console.log("New Phone number is  ", update.address);
}
updateUser({
    name: "Satish",
    phone: "9999999999"
});
console.log("");
updateUser({
    address: "New Address 1234"
});
//# sourceMappingURL=advanceTypeScriptConcept.js.map