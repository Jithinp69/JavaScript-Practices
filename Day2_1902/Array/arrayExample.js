function arrayExample(){

//using literals
const nums = [1, 2, 6, 9, 4, 6];

// using new keyword
var arr = new Array();

arr[0]=10;
arr[1]=20;
arr[2]=30;

console.log(nums);
console.log(arr);
console.log(nums.length);


delete nums[3];
console.log(nums);
console.log(nums[3]);

}

arrayExample();