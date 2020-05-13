/*
 * @Author: your name
 * @Date: 2020-04-15 19:56:09
 * @LastEditTime: 2020-04-16 09:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontendUpload/Users/yangyuancai/Desktop/priwork/nodeJs/54.螺旋矩阵.js
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length <= 0) {
    return matrix;
  }
  let result = Array(matrix.length).fill(0).map(() => []);
  let point = {x: 0, y: -1};
  let increse = 'y';
  let optration = '+';
  let n = matrix.length;
  let m = matrix[0].length;
  let index = 0;
  for(let index1 = 0; index1 < n; index1++) {
    for(let index2 = 0; index2 < m; index2 ++) {
      let nextPoint = {
        x: point.x,
        y: point.y
      };
    nextPoint[increse] = optration === '+' ? ++nextPoint[increse] : --nextPoint[increse];
    let {x, y} = nextPoint;
      if((x > n-1 || x < 0 || !matrix[nextPoint.x][nextPoint.y]) && increse === 'x' ) {
          if(point.y + 1 >= m || !matrix[point.x][point.y + 1] ) {
          optration = '-';
        } else {
          optration = '+';
        }
        increse = 'y';
      } else if((y > m-1 || y < 0 || !matrix[nextPoint.x][nextPoint.y]) && increse === 'y') {
        if(point.x + 1 >= n || !matrix[point.x + 1][point.y] ) {
          optration = '-';
        } else {
          optration = '+';
        }
        increse = 'x';
      }

      point[increse] = optration === '+' ? ++point[increse] : --point[increse];

      result[index] = matrix[point.x][point.y];
      index ++;
      matrix[point.x][point.y] = null;
    }
  }
  return result;
};
// @lc code=end

