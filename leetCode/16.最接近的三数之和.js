/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let best = 10000000;

  // 枚举 a
  for (let i = 0; i < n; ++i) {
    // 保证和上一次枚举的元素不相等
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    // 使用双指针枚举 b 和 c
    let j = i + 1,
      k = n - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      // 如果和为 target 直接返回答案
      if (sum == target) {
        return target;
      }
      // 根据差值的绝对值来更新答案
      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum;
      }
      if (sum > target) {
        // 如果和大于 target，移动 c 对应的指针
        let k0 = k - 1;
        // 移动到下一个不相等的元素
        while (j < k0 && nums[k0] == nums[k]) {
          --k0;
        }
        k = k0;
      } else {
        // 如果和小于 target，移动 b 对应的指针
        let j0 = j + 1;
        // 移动到下一个不相等的元素
        while (j0 < k && nums[j0] == nums[j]) {
          ++j0;
        }
        j = j0;
      }
    }
  }
  return best;
};

// -3,0,1, 2
console.log(threeSumClosest([-1, 0, 1, 1, 55], 3));
// @lc code=end
