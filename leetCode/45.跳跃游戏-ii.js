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
// 方法二 贪心算法，每次挑选最大的进行跳, 
var jump = function(nums) {
  let max = 0;
  let step = 0;
  let end = 0;  // 边界，当到达了边界，直接跳转到边界内能够跳转的最大值
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];
    max = Math.max(max, num + i);
    if(i === end) {
      end = max;
      step++;
    }
  }
  return step;
}
// console.log(jump([9,7,9,4,8,1,6,1,5,6,2,1,7,9,0]));
// @lc code=end

