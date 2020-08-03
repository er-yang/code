/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, n) {
  let res = [];
  nums.sort((a,b) => a - b);
  for(let first = 0; first < nums.length - 1; first++) {
      if(nums[first] === nums[first - 1]) {
          continue;
      }
      for(let forth = first + 1; forth < nums.length; forth++) {
        if(nums[forth] === nums[forth - 1] && forth > first + 1) {
          continue;
        }
        let third = nums.length - 1;
        let target = n - nums[first] - nums[forth];
        for(let sec = forth + 1; sec < nums.length; sec++) {
            if(sec > forth + 1 &&  nums[sec] === nums[sec - 1]) {
                continue;
            }
            while(sec < third && nums[sec] + nums[third] > target) {
                third--;
            }
            if(sec=== third) {
                break;
            }
            if(target === nums[third] + nums[sec]) {
                res.push([nums[first],nums[forth], nums[sec], nums[third]]);
            }
        }
      }

  }
  return res;
};
// @lc code=end

