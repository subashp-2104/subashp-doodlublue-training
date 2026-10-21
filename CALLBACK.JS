//console.log("one");
//setTimeout(() => console.log("Two"), 500);
//console.log("Three");


console.log("Start"); //synchronus
setTimeout(() => console.log("Timer"), 0); //macrotask
Promise.resolve().then(() => console.log("Promise")); //microtask
console.log("Finish"); //synchronus