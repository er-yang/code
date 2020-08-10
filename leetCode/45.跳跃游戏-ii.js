/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let cur = 0;
  let count = 0;
  while(cur < nums.length - 1) {
    let maxIndex = 0;
    let temp = 0;
    if(cur + nums[cur] >= nums.length - 1) {
      ++count;
      break;
    }
    for(let i = 1; i<= nums[cur]; i++) {
      if(cur + i + nums[cur + i] > temp || cur + i + nums[cur + i] >= nums.length) {
        maxIndex = cur + i;
        temp = cur + i + nums[cur + i];
      }
    }
    count++;
    cur = maxIndex;
  }
  return count;
};
// console.log(jump([9,7,9,4,8,1,6,1,5,6,2,1,7,9,0]));
// @lc code=end

