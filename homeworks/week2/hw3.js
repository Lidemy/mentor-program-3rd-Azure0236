function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    // 用 i<str.length，i 會一直遞減到無限負數
    result += str[i];
  }
  console.log(result);
}

reverse('hello');
