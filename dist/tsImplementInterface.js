"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    name;
    age;
    // we do not have to re declare it in the class by using public key word it can access
    // this process is called parameter properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log("Hello your name is " + this.name + " your age is " + this.age);
    }
}
const newObj = new Manager("Rajesh Shrivastav", 23);
newObj.printName();
//# sourceMappingURL=tsImplementInterface.js.map