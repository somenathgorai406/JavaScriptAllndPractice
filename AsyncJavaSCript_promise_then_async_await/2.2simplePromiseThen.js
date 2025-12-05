// Create a simple Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // change to false to test reject

    if (success) {
        resolve("✅ Promise resolved successfully!");
    } else {
        reject("❌ Promise rejected!");
    }
});

// Use the Promise
myPromise
    .then((message) => {
        console.log(message); // Runs if resolved
    })
    .catch((error) => {
        console.log(error); // Runs if rejected
    });
