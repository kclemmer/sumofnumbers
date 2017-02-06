/**
 * Solving Experience E26
 * Created by ijnek on 2/5/2017.
 */

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log('For Loop : ' + sumFor(numList));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i<nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log('While Loop : ' + sumWhile(numList));

function sumRecur(nums) {
  if (nums.length===0) {
    return 0;
  }
  return nums[0] + sumRecur(nums.slice(1, nums.length));
}

console.log('Recursive Loop: ' + sumRecur(numList));

function sumUnderscore(nums) {
  return _.reduce(nums, function memory(memo, num) { return memo + num; });
}

console.log('Underscore : ' + sumUnderscore(numList));