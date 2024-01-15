const { capitalize, reverseString, calculator } = require("./script");

test("Capitalize the first char", () => {
  expect(capitalize("hello")).toMatch(/Hello/);
});

test("Reverse a string", () => {
  expect(reverseString("hello")).toMatch(/olleh/);
});

test("Simple calculator tests", () => {
  //Addition
  expect(calculator.add(5, 2)).toBe(7);

  //Subtraction
  expect(calculator.subtract(5, 2)).toBe(3);

  //Multiplication
  expect(calculator.multiply(5, 2)).toBe(10);

  //Division
  expect(calculator.divide(5, 2)).toBe(2.5);
  expect(calculator.divide(5, 0)).toBe("cannot divide by 0");
});
