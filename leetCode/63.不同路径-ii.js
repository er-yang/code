/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length
  let f = Array(m + 1);
  f = Array.from(f, () => {
      return Array(n + 1).fill(0);
  });
  f[1][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // let temp1 = obstacleGrid[i-1][j] ? 0 : f[i-1][j];
      // let temp2 = obstacleGrid[i][j-1] ? 0 : f[i][j-1];
      if(obstacleGrid[i - 1][j - 1] === 1) {
        f[i][j] = 0;
      } else {
        if(i === 1 && j === 1) {
          continue;
        }
        f[i][j] = f[i-1][j] + f[i][j-1];      
      }
    }    
  }
  return f[m][n];
};
// @lc code=end

