console.log("1 step to execute");
console.log("2 step to execute");
console.log("3 step to execute");
console.log("4 step to execute");
//console.log("5 step to execute");
setTimeout(() => { console.log("5 step to execute") }, 2000) //this will be executed after 2 seconds atlast
console.log("6 step to execute");

//simulating an async operation using setTimeout