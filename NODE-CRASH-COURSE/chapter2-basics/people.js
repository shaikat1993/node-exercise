const people = ["shaikat", "sadidur", "shayla", "shayma", "meem"];
const age = [30, 30, 26, 16, 21];

console.log(people);

// if we want to export a single object or value of a property
//module.exports = people;

// what if we want to export multiple things
module.exports = {
    // people: people,
    // age: age

    //or we can simply type the object only
    people, age

}