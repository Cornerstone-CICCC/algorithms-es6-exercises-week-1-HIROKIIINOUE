/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];
const arrayLength = ingredients.length;

// Under the first, write a while loop that prints out each item of ingredients.
let x = 0;
while (x < arrayLength) {
  console.log(ingredients[x]);
  x++;
}

// Under the second, write a for loop that does the same thing.
for (let i = 0; i < arrayLength; i++) {
  console.log(ingredients[i]);
}

// And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
const reversedIngredients = ingredients.reverse();
for (let i = 0; i < arrayLength; i++) {
  console.log(reversedIngredients[i]);
}
