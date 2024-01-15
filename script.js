function capitalize(string) {
  const firstChar = string.charAt(0);
  const remain = string.slice(1);

  return firstChar.toUpperCase() + remain;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  divide: function (num1, num2) {
    if (num2 === 0) {
      return "cannot divide by 0";
    }
    return num1 / num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
