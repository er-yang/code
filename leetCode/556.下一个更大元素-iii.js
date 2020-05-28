/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  if (n <= 0) {
    return -1;
  }
  let nums = Array.from(n + '');
  let result = [];
  let curMax = parseInt(nums[nums.length - 1]);
  let firstMinIndex = -1;
  let flag = false;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (parseInt(nums[i]) < curMax) {
      firstMinIndex = i;
      flag = true;
      break;
    } else {
      curMax = parseInt(nums[i]);
      result.push(nums[i]);
    }
  }
  if (!flag) {
    return -1;
  }
  let firstMinNum = nums[firstMinIndex];
  result.unshift(firstMinNum);
  for (let j = 1; j < result.length; j++) {
    if (firstMinNum < result[j]) {
      [result[j], result[0]] = [firstMinNum, result[j]];
      break;
    }
  }
  result = nums.slice(0, firstMinIndex).concat(result);
  let resultNum = parseInt(result.join(''));
  if (resultNum.toString(2).length >= 32) return -1;
  return resultNum;
};
// @lc code=end
