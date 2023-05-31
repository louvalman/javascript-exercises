const sumAll = function (num1, num2) {
  if (
    // very strict check for wether arguments are numbers or parsed as strings, check for positive numbers, number type, and NaN after being parsed as Numbers and give an error if anything is true
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    Number.isNaN(num1) ||
    Number.isNaN(num2)
  ) {
    return `ERROR`;
  }

  const lowest = Math.min(num1, num2); // calculate the highest/lowest of the two numbers and store in constants
  const highest = Math.max(num1, num2);

  let sum = 0;

  for (let i = lowest; i <= highest; i++) {
    // set i to lowest of the two numbers, and loop from lowest to highest by stopping loop when i = highest
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
