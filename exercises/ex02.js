/*
Write a series of conditional statements that:

- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4

*/

const musicians = 7;

if (musicians <= 0) {
  console.log("note a group");
} else {
  switch (musicians) {
    case 1:
      console.log("solo");
      break;
    case 2:
      console.log("duet");
      break;
    case 3:
      console.log("trio");
      break;
    case 4:
      console.log("quartet");
      break;
    default:
      console.log("this is a large group");
  }
}
