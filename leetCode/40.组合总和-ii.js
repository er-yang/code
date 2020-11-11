/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 // 树 回溯 不能包含重复的集合
var combinationSum2 = function(candidates, target) {
  const result = [];
  const dfs = (combine, exclude, index, tar) => {
    if(tar === 0) {
      return result.push(combine);
    }
    if(index >= candidates.length) {
      return;
    }
    const num = candidates[index];
    dfs(combine, exclude.concat(num), index + 1, tar);
    if(tar - num >= 0 && exclude.findIndex(ele => ele === num) < 0) {
      dfs(combine.concat(num), exclude, index + 1, tar - num);
    }
  }
  dfs([],[], 0, target);
  return result;
};
// @lc code=end

