function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function isPalindromes(str) {
  if (str === reverse(str)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindromes;
