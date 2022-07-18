function forIn() {
  const nums = [58, 7, 8, 5, 9];

  let average=nums.length
  console.log(nums.length);
  let sum = 0;
  for (let i in nums) {  // condition and inc/dec taken care by for in loop itself.
    sum += nums[i];
  }
  console.log(sum);
  console.log(sum/average);
}
forIn();
