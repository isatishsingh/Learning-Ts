function functionHolder(fn: () => Promise<string>) {
  return new Promise((resolve) => {
    setTimeout(async () => resolve(await fn()), 2000);
  });
}

async function main() {
  let message = await functionHolder(async function () {
    console.log("I Hope you received the message");
    return new Promise<string>((resolve) =>
      setTimeout(() => resolve("Simple Text string"), 2000)
    );
  });

  console.log("After completion of Task message is", message);
}

main();
