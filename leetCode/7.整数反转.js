/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let r = 0;
  while(x !== 0) {
  let t = x % 10;
  if(r > Math.pow(2, 31) / 10 || ( r === Math.pow(2, 31) / 10 && t >= 7) ) {
      return 0;
  }
  if(r < -(Math.pow(2, 31)-1) / 10 || ( r === Math.pow(2, 31) / 10 && t <= -8) ) {
      return 0;
  }
  r = r * 10 + t;
  x = x > 0 ? Math.floor(x / 10) :  Math.ceil(x / 10);
  }
  return r;
  //  let result = 0;
  // while(x !== 0) {
  //     result = result * 10 + x % 10;
  //     x = (x / 10) | 0;
  // }
  // return (result | 0) === result ? result : 0;
};
// @lc code=end

