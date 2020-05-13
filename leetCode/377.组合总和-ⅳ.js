/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  if(nums.length <= 0) {
    return 0;
  }
  let resultArr = new Array(target + 1).fill(0);
  resultArr[0] = 1;
  for(let i = 1; i <= target ; i ++) {
    for(let el of nums) {
      if(i >= el) {
        resultArr[i] += resultArr[i - el] ;
      }
    }
  }
  return resultArr[target];
};
// @lc code=end

