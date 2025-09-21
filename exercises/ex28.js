/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  yourName: "Hiroki",
  numberOfYourFriends: 8,
  yourPost: ["Hello", "Thank you", "Good bye"],
  post: function postMessage(message) {
    this.yourPost.push(message);
  },
  delete: function deleteMessage(index) {
    this.yourPost.splice(index, 1);
  },
  add: function addFriend() {
    this.numberOfYourFriends++;
  },
  remove: function removeFriend() {
    this.numberOfYourFriends--;
  },
};

console.log(facebookProfile);

//test
facebookProfile.post("added");
console.log("add post", facebookProfile);

facebookProfile.delete(0);
console.log("delete post", facebookProfile);

facebookProfile.add();
console.log("add friend", facebookProfile);

facebookProfile.remove();
console.log("remove friend", facebookProfile);
