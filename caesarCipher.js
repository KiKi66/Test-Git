const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphaDict = alphabet.split("");

function caesarCipher(string, shift = 1) {
  const lowerString = string.toLowerCase();
  const lowerChar = lowerString.split("");
  let result = "";
  lowerChar.forEach((char) => {
    if (char == " ") {
      return (result += " ");
    }

    const idx = alphaDict.indexOf(char);
    const shiftIdx = (idx + shift) % alphaDict.length;
    result += alphaDict[shiftIdx];
  });
  return result.toUpperCase();
}

module.exports = caesarCipher;
