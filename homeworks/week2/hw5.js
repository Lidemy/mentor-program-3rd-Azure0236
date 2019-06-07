function join(str, concatStr) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === str.length - 1) {
      result += str[i];
      return result;
    }
    result += str[i] + concatStr;
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('a', 5));
