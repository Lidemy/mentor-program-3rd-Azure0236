function join(str, concatStr) {
  var result = ""
  for (var i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      return result += str[i]
    } else {
      result += str[i] + concatStr
    }
  }
  return result;
}

function repeat(str, times) {
  var result = ''
  for (var i = 1; i <= times; i++) {
    result += str
  }
  return result
}
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('a', 5));

