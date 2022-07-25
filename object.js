let friend = {
  name: "jithin",
  friendName: ["jithin", "Rohit", "virat"],
  friendAge: [20, 25, 18],
  age: 29,
  func: function() {
    console.log("Hello world");
  },
};

for (let i = 0; i < friend.friendName.length; i++) {
  if (friend.friendAge[i] > 18) {
    console.log(friend.friendName[i] + " can drive");
  } else {
    console.log(friend.friendName[i] + " cant drive");
  }
}
console.log(friend.friendName);
console.log(friend.friendName.length);
console.log(friend.age);
friend.func();

const persons = [
  {
    name: "jithin",
    age: 28,
  },
  {
    name: "prajwal",
    age: 17,
  },
];

console.log(persons.length);

for (let i = 0; i < persons.length; i++) {
  if (persons[i].age > 18) {
    console.log(persons[i] + " can drive");
  } else {
    console.log(persons[i] + " cant drive");
  }
}
