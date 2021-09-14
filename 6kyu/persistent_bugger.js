// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// *** persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

function persistence(num) {
  // Count the number of multiplications that occur until the computed number becomes single digit.
  let count = 0;

  // When I don't know exactly how many times iteration occurs I use while...
  while (`${num}`.length > 1) {
    count++;
    num = num
      .toString()
      .split('')
      .reduce((a, b) => a * b);
    console.log(num);
  }

  return count;
}

// *** Alternative and recursion example answer.
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
};
// persistence(39)
