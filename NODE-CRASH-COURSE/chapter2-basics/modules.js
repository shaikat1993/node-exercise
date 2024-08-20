// now we want to import people array from people.js file into this file
const importedPeople = require('./people');

console.log(importedPeople);

console.log(importedPeople.people);
console.log(importedPeople.age);


// if we only want to export only one object from a specific file
const { age } = require('./people');
console.log(age);

const os = require('os');
console.log(os.platform(), os.homedir());