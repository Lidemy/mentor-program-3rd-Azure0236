function printStars(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += '*';
  }
  return result;
}

function stars(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(printStars(i));
  }
  return result;
}

module.exports = stars;


