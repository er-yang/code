/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;
  let f = Array.from(Array(m + 1), () => Array.from(Array(n + 1), () => Number.MAX_SAFE_INTEGER));

  f[m][n-1] = f[m-1][n]=1;
  for(let i = m -1; i >=0; i --) {
    for(let j = n-1; j >= 0; j--) {
      let min = Math.min(f[i][j+1], f[i+1][j]);
      f[i][j] = Math.max(min - dungeon[i][j], 1);
    }
  }
  return f[0][0];
};
// @lc code=end

