/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 回溯法
var combinationSum = function(candidates, target) {
  let result = [];
  var dfs = (combine, target, index) => {
    if(index >= candidates.length) {
      return;
    }
    if(target === 0) {
      result.push(combine);
      return
    }
    
    let temp = [...combine];
    combine.push(candidates[index])
    dfs(temp, target, index+ 1);
    if(target - candidates[index] >= 0) {
      dfs(combine, target - candidates[index], index);
    }
  }
  dfs([], target, 0);
  return result;
};
// @lc code=end

