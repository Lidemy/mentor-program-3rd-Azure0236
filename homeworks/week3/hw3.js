function isPrime(n) {
  let result = [];
  if (n <= 1) {
    return false;
  } else {
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        result.push(i);
      }
    }
    if (result.length > 2) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = isPrime;
