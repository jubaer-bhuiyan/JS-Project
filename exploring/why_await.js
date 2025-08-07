const sayBoom = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BOOM!");
            resolve();
        }, 2000);
    })
}

const main = async () => {
    console.log("In 2 second, I'm gonna shoot")

    await sayBoom();

    console.log("You're dead!")
}

main();