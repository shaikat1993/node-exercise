// global object

/*
In Node.js, the global object is the topmost scope of the JavaScript runtime environment. 

It's similar to the 'window' object in a browser, but for Node.js. 
The 'global' object contains properties and functions that are available globally, 
meaning they can be accessed from anywhere in your code.
*/

//console.log(global);

// now we will create a global variable which we will access it in this file
global.myVariable = 'hi, this is my global variable';
console.log(global.myVariable);

// now we will try to access it inside a function
function myFunction() {
    console.log('accessing global object inside myFunction');
    console.log(global.myVariable);
}

myFunction();

// now lets check whether we can access it from another file


/*
The global object provides access to methods and properties in Node.js. 
You can use the

-> setTimeout, 
->setInterval, and 
-> clearInterval methods, 

similar to the window object in a browser.
*/

// global.setTimeout(() => {
//     console.log("in the timeout");
// }, 5000);

/*
Since 
-> setTimeout, 
-> setInterval, and 
-> clearInterval are properties of the global object, 

you can access them directly without prefixing global. 

This is because the scope resolution process will eventually reach the global object 
and find the desired property.
*/ 

setTimeout(() => {
    console.log("in the timeout");
    clearInterval(interval);
}, 5000);

const interval = setInterval(() => {
    console.log("in the interval")
}, 1000);

//this is useful for work
console.log(__dirname);
console.log(__filename);

console.log(document.querySelector);