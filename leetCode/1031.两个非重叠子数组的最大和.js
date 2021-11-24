/*
 * @lc app=leetcode.cn id=1031 lang=javascript
 *
 * [1031] 两个非重叠子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  let i = 0;
  let j = nums.length - secondLen;
  //   let L = nums.slice(0, firstLen).reduce((a, b) => a + b, 0);
  //   let M = nums.slice(j).reduce((a, b) => a + b, 0);
  let M = 0;
  let L = nums.slice(0, firstLen).reduce((a, b) => a + b, 0);
  let total = 0;

  for (i = 0; i <= nums.length - firstLen; i++) {
    if (i != 0) {
      L = L - (nums[i - 1] || 0) + nums[i + firstLen - 1];
    }
    M = nums.slice(nums.length - secondLen).reduce((a, b) => a + b, 0);
    for (j = nums.length - secondLen; j >= 0; j--) {
      if (j !== nums.length - secondLen) {
        M = M - nums[j + secondLen] + nums[j];
      }
      if ((j >= i && j < i + firstLen) || (i >= j && i < j + secondLen)) {
        continue;
      }
      total = Math.max(total, L + M);
    }
  }
  return total;
};
// maxSumTwoNoOverlap(
//   [12, 8, 12, 18, 19, 10, 17, 20, 6, 8, 13, 1, 19, 11, 5],
//   3,
//   6
// );
// console.log([12, 18, 19, 10, 17, 20, 19, 11, 5].reduce((a, b) => a + b, 0));
// @lc code=end
