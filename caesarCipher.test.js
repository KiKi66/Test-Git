const caesarCipher = require("./caesarCipher");

test("encrypt message", () => {
  expect(caesarCipher("Hello World", 15)).toBe("WTAAD LDGAS");
});
