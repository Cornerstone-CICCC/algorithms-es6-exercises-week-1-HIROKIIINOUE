/*
Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("John", 1983, 2015);, the return value should be as follows.
"John is 32 years old."
*/

const firstName = "John";
const yearOfBirth = 1983;
const currentYear = 2015;
ageCalculator(firstName, yearOfBirth, currentYear);

function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  console.log(`${name} is ${age} years old.`);
}
