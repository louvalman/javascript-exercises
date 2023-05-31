// const removeFromArray = function (array, ...values) {
//   return array.filter((element) => !values.includes(element));
// };

// For every element in our array, we check if valuesToRemove is present - if not, we push it to a new array and return it.

const removeFromArray = function (array, ...valuesToRemove) {
  const newArray = [];
  array.forEach((element) => {
    if (!valuesToRemove.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
