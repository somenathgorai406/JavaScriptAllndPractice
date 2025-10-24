/* 2667. Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World". */
function createHelloWorld() {
    console.log('Hellow World'); // return will be console log and it will print
}
createHelloWorld();
createHelloWorld({}, null, 42); //for blank function any value can be passed

function createHelloWorld1() {
    return "Hello World1"; //returns only string
    //console.log('Hellow World');
}
createHelloWorld1(); //returning string so no output in the console and 
createHelloWorld1({}, null, 42); //
console.log(createHelloWorld1());
console.log(createHelloWorld1({}, null, 42));

//function returning another function
function createHelloWorld2() {
    return function () {
        return "Hello World2";
    }
}

createHelloWorld2();
createHelloWorld2({}, null, 42);
createHelloWorld2()();
createHelloWorld2()({}, null, 42);
console.log(createHelloWorld2())
console.log(createHelloWorld2(2345324))
console.log(createHelloWorld2()()) //best way to call for my understanding
console.log(createHelloWorld2()(23452345, 2345, 345))

//return type of console.log  and return;

function createHelloWorld3() {
    //console.log('Hellow World'); //console log will print
    return console.log('Hellow World console'); //
}
createHelloWorld3(); //only Hellow World will be printed
console.log(createHelloWorld3()); //hellow world and undefined will be printed as console.log returns undefined

console.log("End of File");
console.log("End of File", 2345234);
console.log("End of File", {}, null, 2345234);
console.log(console.log("End of File")); //prints end of file and undefined

//arrow functions
const createHelloWorld4 = () => {
    console.log('Hellow world arrow')
}
createHelloWorld4();

//annonymous function
const createHelloWorld5 = function () {
    console.log('Hellow world arrow annonymous')
}
createHelloWorld5();