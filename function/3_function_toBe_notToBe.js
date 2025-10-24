/* 2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
*/
/*
//I tried--
function expect(a) {
    return {
        toBe: function (b) {
            if (a === b) { return true }
            else if (a !== b) {
                return ("Not Equal");
            }
        },
        notToBe: function (c) {
            if (a !== c) { return true }
            else if (a === b) {
                return "Equal"
            }
        }
    }
}
*/
//function returning object with function;
//throw new Error("Not Equal"); 
//try catch
function expect(val) {
    return {
        toBe: function (compareVal) {
            if (val === compareVal) {
                return true;
            } else {
                throw new Error("Not Equal"); //This immediately stops the program and signals that something went wrong and returns Error
            }
        },
        notToBe: function (compareVal) {
            if (val !== compareVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

try {
    const result = expect(5).toBe(5);
    console.log({ value: result });
} catch (error) {
    console.log({ error: error.message });
}

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(null)); // true
console.log(expect(5).toBe(null)); // Error: Not Equal 

/* Error Handling

If the check fails, we use:

throw new Error("message");

This immediately stops the program and signals that something went wrong.

To safely test the function and avoid program crash, use try...catch:

try {
    const result = expect(5).toBe(5);
    console.log({ value: result });
} catch (error) {
    console.log({ error: error.message });
} */