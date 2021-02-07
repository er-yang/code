/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 排序后用栈进行比较
var merge = function(intervals) {
  intervals.sort((item1, item2) => item1[0] - item2[0]);
  let stack = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const area = intervals[i];
    let preStack = stack.pop();
    if(preStack[1] < area[0]) {
      stack.push(preStack, area);
    } else {
      preStack[1] = Math.max(area[1], preStack[1]);
      stack.push(preStack);
    }
  }
  return stack;
};
// console.log(JSON.stringify(merge([[1,4],[0,4]])));
// @lc code=end

