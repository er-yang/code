/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const result = [];
  const map = {};
  nums1.forEach(item => {
    if(!map[item]) {
      map[item] = true;
    }
  });
  nums2 = [...new Set(nums2)];
  nums2.forEach(item => {
    if(map[item]) {
      result.push(item);
    }
  });
  return result;
};
// @lc code=end

