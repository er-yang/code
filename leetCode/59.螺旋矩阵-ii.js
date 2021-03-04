/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let arr = Array.from(Array(n), () => Array(n));
  let left = top = 0;
  let right = bottom = n -1;
  let num = 1;
  while(left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = num++;      
    }
    for(let j = top + 1; j <= bottom; j++) {
      arr[j][right] = num++;
    }
    for (let i = right - 1; i >= left; i--) {
      arr[bottom][i] = num++;      
    }
    for (let j = bottom - 1; j > top; j--) {
      arr[j][left] = num++;      
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return arr;
};
// @lc code=end

