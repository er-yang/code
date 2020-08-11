/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let maxLength = 0;
  let obj = {};
  for(let i=0; i < nums.length; i++) {
    obj[nums[i]] = 0;
  }
  for(let i=0; i < nums.length; i++) {
    if(obj[nums[i]] !== 0) {
      continue;
    }
    let count = 1;
    let temp = nums[i];
    while(obj[temp + 1] === 0) {
      count++;
      obj[temp] = count;
      temp++;
    }
    obj[nums[i]] = count + (obj[temp + 1]  || 0);
    if(maxLength < obj[nums[i]]) {
      maxLength = obj[nums[i]];
    }
  }
  return maxLength;
};
// console.log('---', longestConsecutive([1,3,5,2,4]))
// @lc code=end

