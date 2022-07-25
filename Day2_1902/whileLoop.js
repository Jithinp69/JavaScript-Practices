function whileLoop() {
  var nums = [3, 8, 5, 9, 1];
  var largest = nums[0];

  var i = 0;
  while (i < nums.length) {
    var curNum = nums[i];
    if (curNum > largest) {
      largest = curNum;
    }
    i++;
  }
  console.log(largest);
}
// whileLoop();

function doWhile() {
  var fruits = ["apple", "banana", "gauva"];

  var idx = 0;
  do {
    console.log("fruits are : ", fruits[idx]);
    idx++;
  } while (idx < fruits.length);
  
}
doWhile();
