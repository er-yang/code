/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length <= 0) {
    return [newInterval];
  }
  const result = [];
  let tempInterval = newInterval;
  for (let i = 0; i < intervals.length; i++) {
    const ele = intervals[i];
    if (tempInterval && isOverlap(tempInterval, ele)) {
      const start = Math.min(tempInterval[0], ele[0]);
      const end = Math.max(tempInterval[1], ele[1]);
      tempInterval = [start, end];
    } else {
      result.push(ele);
      if (
        tempInterval &&
        (i === intervals.length - 1 || ele[0] > tempInterval[1])
      ) {
        ele[0] > tempInterval[0]
          ? result.splice(result.length - 1, 0, tempInterval)
          : result.push(tempInterval);
        tempInterval = null;
      }
    }
  }
  if (tempInterval) {
    result.push(tempInterval);
  }
  return result;
};
function isOverlap(inte1, inte2) {
  return (
    (inte1[1] >= inte2[0] && inte1[0] <= inte2[0]) ||
    (inte2[1] >= inte1[0] && inte2[0] <= inte1[0])
  );
}
// @lc code=end
