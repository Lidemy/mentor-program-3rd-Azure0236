function alphaSwap(str) {
  let str2 = '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      str2 = str[i].toUpperCase()
      result += str2;
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      str2 = str[i].toLowerCase()
      result += str2;
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = alphaSwap;
