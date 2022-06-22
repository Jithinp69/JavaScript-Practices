let friends = ["jithin", "Rohit", "virat"];
let age = [20, 25, 18];

for (i = 0; i < friends.length; i++) {
  if (age[i] > 18) {
    console.log(friends[i] + " can drive");
  } else {
    console.log(friends[i] + " not eligible to drive");
  }
}
