// Function that returns a Promise
function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        let success = true; // change to false to test rejection

        if (success) {
            resolve("✅ Promise resolved successfully!");
        } else {
            reject("❌ Promise rejected!");
        }
    });
}

// Async function using await
async function runPromise() {
    try {
        const result = await myPromiseFunction(); // waits for promise to resolve
        console.log(result); // prints the resolved message
    } catch (error) {
        console.log(error); // prints the rejected message
    }
}

runPromise(); // call the async function
