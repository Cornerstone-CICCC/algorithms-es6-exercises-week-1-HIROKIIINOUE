/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

const emotions = function (yourEmotion, laughTimes, laugh) {
  const yourLaugh = laugh(laughTimes);
  const result = `I am ${yourEmotion}, ${yourLaugh}!`;
  return result;
};

const output = emotions("happy", 2, function laugh(times) {
  let lol = "";
  for (let i = 0; i < times; i++) {
    lol = lol + "ha";
  }
  return lol;
});

console.log(output);
