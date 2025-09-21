/*
Wrap the code you've written in a function called loopy(range, multiples, words) that you call with 3 parameters.

range - should be an array of 2 numbers representing the start and end values for the loop.
multiples - should be an array of 2 numbers representing the multiples you want to replace with words.
words - should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopy([15, 90], [2, 5], ["Batty", "Beacon"]);

The loopy function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/

function loopy(range, multiples, words) {
  let startPoint;
  let endPoint;

  if (range[0] < range[1]) {
    startPoint = range[0];
    endPoint = range[1];
  } else {
    startPoint = range[1];
    endPoint = range[0];
  }

  const firstWord = words[0];
  const secondWord = words[1];

  for (let i = startPoint; i <= endPoint; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(`${firstWord}${secondWord}`);
    } else if (i % multiples[0] === 0) {
      console.log(`${firstWord}`);
    } else if (i % multiples[1] === 0) {
      console.log(`${secondWord}`);
    } else {
      console.log(i);
    }
  }
}

loopy([5, 42], [2, 7], ["Batty", "Beacon"]);
