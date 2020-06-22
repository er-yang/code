/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let result = [];
  function swap(arr, index1, index2) {
    [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
  }
  let index = 0;
while(index < nums.length) {
  let val = nums[index];
  if(val !== index + 1 && val) {
    if(val === nums[val - 1]) {
      result.push(val);
      nums[index] = null;
    } else {
      swap(nums, index, val - 1);
      continue;
    }
  }
  index++;
}
return result;
};
// @lc code=end

