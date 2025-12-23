"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functionHolder(fn) {
    return new Promise((resolve) => {
        setTimeout(async () => resolve(await fn()), 2000);
    });
}
async function main() {
    let message = await functionHolder(async function () {
        console.log("I Hope you received the message");
        return new Promise((resolve) => setTimeout(() => resolve("Simple Text string"), 2000));
    });
    console.log("After completion of Task message is", message);
}
main();
//# sourceMappingURL=index.js.map