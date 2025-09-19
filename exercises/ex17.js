/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

let lol = "";

const laugh = function (times) {
  for (let i = 0; i < times; i++) {
    lol = lol + "ha";
  }
  return lol;
};

const output = laugh(3);

console.log(output);
