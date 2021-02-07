/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 *
 * f(x, y) = Min(f(x, y - 1), f(x - 1, y)) + n;
 */
var minPathSum = function (grid) {
  let result = Array(grid.length + 1);
  result = Array.from(result, (_, index) => {
    if(index === 0) {
      return [0, 0].concat(Array(grid[0].length).fill(Number.MAX_SAFE_INTEGER));
    } else {
      return [Number.MAX_SAFE_INTEGER].concat(Array(grid[0].length));
    }
  })
  for (let x = 1; x <= grid.length; x++) {
    for (let y = 1; y <= grid[x - 1].length; y++) {
      const n = grid[x - 1][y - 1];
      result[x][y] = Math.min(result[x][y - 1], result[x - 1][y]) + n;
    }
  }
  return result[grid.length][grid[0].length];
};
// @lc code=end
