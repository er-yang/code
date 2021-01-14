/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length - 1; i++) {
//     let diff = target - nums[i];
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[j]=== diff) {
//         return [i, j]
//       }
//     }
//   }
// };
var twoSum = function(nums, target) {
  let map = {};
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(map[diff] >= 0) {
      return [i, map[diff]];
    } else {
      map[nums[i]] = i;
    }
  }
};
// @lc code=end

