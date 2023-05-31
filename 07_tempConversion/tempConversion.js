const convertToCelsius = function (tempf) {
  tempc = (tempf - 32) * (5 / 9);
  return Number(tempc.toFixed(1)); // because to.Fixed returns a string representation of the temp, we need to wrap it in the Number function to return the result as a string!
};

const convertToFahrenheit = function (tempc) {
  tempf = (tempc * 9) / 5 + 32;
  return Number(tempf.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
