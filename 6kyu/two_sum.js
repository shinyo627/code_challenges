// https://www.codewars.com/kata/52c31f8e6605bcc646000082/
// twoSum [1, 2, 3] 4 === (0, 2)
function twoSum(numbers, target) {
  //   return array of two items that are equal to the target param after added together.
  let subTarget = 0;
  //   subtract target with element each iteration
  //   find index of item that matches remaining from subtracted target
  for (let i = 0; i < numbers.length; i++) {
    subTarget = target - numbers[i];
    if (numbers.indexOf(subTarget) !== -1) {
      return [i, numbers.lastIndexOf(subTarget)];
    } else {
      continue;
    }
  }
}

// twoSum([1234,5678,9012], 14690) [1, 2]
// twoSum([2,2,3], 4) // [0, 1]
twoSum([1234, 5678, 9012], 14690);

// *** alternative answer
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
