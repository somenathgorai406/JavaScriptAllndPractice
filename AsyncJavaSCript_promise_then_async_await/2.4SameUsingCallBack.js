// Function that uses a callback
function myCallbackFunction(callback) {
    let success = true; // change to false to test failure

    if (success) {
        callback(null, "✅ Operation successful (callback)");
    } else {
        callback("❌ Operation failed (callback)", null);
    }
}

// Calling the function
myCallbackFunction((error, result) => {
    if (error) {
        console.log(error); // runs if failed
    } else {
        console.log(result); // runs if successful
    }
});
