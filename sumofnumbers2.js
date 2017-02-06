/**
 * Solving Experience E26 - Try 2
 * Created by Kenji Clemmer on 2/5/2017.
 */

const test = [1, 2, 3, 1, 1];

function sumFor(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log('For Loop: ');
console.log(sumFor(test));

function sumWhile(numbers) {
  let i = 0;
  let sum = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i += 1;
  }
  return sum;
}

console.log('While Loop: ');
console.log(sumWhile(test));

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log('Recursive Loop: ');
console.log(sumRecursion(test));

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function(memo, num) { return memo + num; }, 0);
}

console.log('Underscore "Loop": ');
console.log(sumTheSimpleWay(test));

// 17m 14.6s
