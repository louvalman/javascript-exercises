// const removeFromArray = function (array, ...values) {
//   return array.filter((element) => !values.includes(element));
// };

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
