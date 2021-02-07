/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  // nums.sort((a, b) => a - b);
  const result = [];
  var helper = ( index, child = [], unChoose = []) => {
    if(index >= nums.length) {
      return result.push(child);
    }
    let num = nums[index];
    let nextIndex = index + 1;
    if(unChoose.findIndex(item => item === num) >= 0) {
      helper(nextIndex, child, unChoose);
    } else {
      helper(nextIndex, child.concat(num), unChoose);
      helper(nextIndex, child, unChoose.concat(num));
    }

  }
  helper(0);
  return result;
};
// console.log(JSON.stringify(subsetsWithDup([1,2,2])))
// @lc code=end

