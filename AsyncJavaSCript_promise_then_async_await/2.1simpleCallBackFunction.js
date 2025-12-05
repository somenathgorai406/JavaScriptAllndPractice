// A simple function that takes another function as a callback
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback(); // calling the callback function
}

// The callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Calling the main function and passing callback
greetUser("Somenath", sayGoodbye);
