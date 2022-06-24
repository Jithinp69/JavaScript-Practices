let friends = ["jithin", "Rohit", "virat"];
let age = [20, 25, 18];

for (i = 0; i < friends.length; i++) {
  if (age[i] > 18) {
    console.log(friends[i] + " can drive");
  } else {
    console.log(friends[i] + " not eligible to drive");
  }
}

const data = [[1, 2, 3], [1,[2,7,9], 3, 4], [4, 5, 6]];
console.log(data[1] );