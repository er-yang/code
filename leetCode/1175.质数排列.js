/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  function isPrime(num) {
    if(num === 1) return false;
    let flag = true;
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  function factorial(num) {
    if(num <= 1) {
      return 1n;
    }
    return num * factorial(num - 1n);
  }
  let count = 0;
  for(let m = 1; m <= n; m++) {
    if(isPrime(m)) {
      count++;
    }
  }
  let result = factorial(BigInt(count)) * factorial(BigInt(n - count));
  return result % (BigInt(Math.pow(10, 9)) + 7n);
};

// @lc code=end

