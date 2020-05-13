/*
 * @lc app=leetcode.cn id=916 lang=javascript
 *
 * [916] 单词子集
 */

// @lc code=start
/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  let arr = B.reduce((acc, cur) => {
    let temp = {};
    for(let char of cur) {
      temp[char] = (temp[char] || 0) + 1
    }
    for(let char of Object.keys(temp)) {
      if(!acc[char] || acc[char] < temp[char]) {
        acc[char] = temp[char];
      }
    }
    return acc;
  }, {});
  let str = Object.keys(arr).map(val => ({reg: new RegExp(val, 'g'), value: arr[val]}));
  let result = [];
  for(let i = 0; i < A.length; i++) {
    let value = A[i];
    let flag = true;
    for(let obj of str) {
      flag = value.match(obj.reg);
      if(!flag || flag.length < obj.value) {
        flag = false;
        break;
      } 
    }
    flag && result.push(A[i]);
  }
  return result;
};
// @lc code=end

