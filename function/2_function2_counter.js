
/* 2620. Counter

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call. */
var createCounter = function (n) {
    let currentCount = n - 1;
    return function () {
        currentCount += 1;
        return currentCount;
    };
};
console.log(createCounter()); //[Function (anonymous)]
console.log(createCounter(10)());// 10
console.log(createCounter(10)());// 10
console.log(createCounter(10)());// 10

const counter = createCounter(10); // returns a function that increments the count, 
// createCounter() has finished running

console.log(counter()); // 10 // first call, currentCount was 9, now 10
console.log(counter()); // 11 // second call, currentCount was 10, now 11
console.log(counter()); // 12
console.log(counter()); // 13

/* Example usage:   
🔹 Key Concept — Closure
Even though createCounter() has finished running,
its inner function remembers the variable currentCount from its lexical scope.
That’s why it can keep increasing the same variable every time it’s called.
*/