/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = [];
  let helper = (arr, useP = [], useN= [], th = 0, str = '') => {
    if(arr.length <= 0) {
      res.push(str);
    }
    for(let i = 0; i < arr.length; i++) {
      let usedP = useP.slice(0);
      let usedN = useN.slice(0);
      let sum = th + arr[i] + n;
      let d = th - arr[i] + n;
      if(!usedP[sum] && !usedN[d]) {
        usedP[sum] = true;
        usedN[d] = true;
        helper([...arr.slice(0, i), ...arr.slice(i+1)], usedP, usedN, th + 1, str + arr[i]);
      } else {
        continue;
      }
    }
  }
  let arr = Array.from(Array(n), (_, index) => index);
  helper(arr);
  return res.length;
};
// @lc code=end

