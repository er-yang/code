/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  let isZero = true;
  for(let i = 0; i < citations.length; i ++) {
    if(citations.length - i <= citations[i]) {
      return citations.length - i;
    }
    if(citations[i] > 0) {
      isZero=false;
    }
  }
  return isZero ? 0 : 1;
};
// @lc code=end

