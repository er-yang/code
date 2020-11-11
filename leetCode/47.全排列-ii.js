/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];
  const helper = (res, arr) => {
    const unique = [...new Set(arr)];
    if(res.length === nums.length) {
      result.push(res);
      return;
    }
    for(let i =0; i < unique.length; i ++) {
      const num = unique[i];
      const temp = arr.slice(0);
      temp.splice(arr.indexOf(num), 1);
      helper(res.concat(num), temp);
    }
  }
  helper([], nums);
  return result;
};
// @lc code=end

