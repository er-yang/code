/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// f(i, j) = f(i - 1, j) + f(i, j - 1) 
var uniquePaths = function(m, n) {
  let f = Array(m + 1);
  f = Array.from(f, () => {
      return Array(n + 1).fill(0);
  });
  f[1][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      f[i][j] = (f[i-1][j] + f[i][j-1]) || 1;      
    }    
  }
  return f[m][n];
};

/**
 * 方法2 数学组合法， 需要移动往左 n-1次 往下 m -1次
 * 相当于求 从 m + n - 2的总次数中选择m-1次向下移动
 */
var uniquePaths = function(m, n) {
  let ans = 1;
  for (let x = n, y = 1; y < m; ++x, ++y) {
      ans = ans * x / y;
  }
  return ans;
}


// console.log(uniquePaths(7,3));
// @lc code=end

