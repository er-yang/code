/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  nums.sort((a,b) => a - b);
  for(let first = 0; first < nums.length; first++) {
      if(nums[first] === nums[first - 1]) {
          continue;
      }
      let third = nums.length - 1;
      let target = -nums[first];
      for(let sec = first + 1; sec < nums.length; sec++) {
          if(sec > first + 1 &&  nums[sec] === nums[sec - 1]) {
              continue;
          }
          while(sec < third && nums[sec] + nums[third] > target) {
              third--;
          }
          if(sec=== third) {
              break;
          }
          if(target === nums[third] + nums[sec]) {
              res.push([nums[first], nums[sec], nums[third]]);
          }
      }
  }
  return res;
};

// @lc code=end

