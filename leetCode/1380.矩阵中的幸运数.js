/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let min = [];
  let max = [];
  for(let i = 0; i < matrix.length; i++){
  let minNum = 0;
   for(let j = 0; j < matrix[i].length; j++) {
     if(matrix[i][minNum] > matrix[i][j]) {
       minNum = j;
     }
     if(matrix[i][j] > ((matrix[max[j]] && matrix[max[j]][j]) || 0)) {
       max[j] = i;
     }
   }
   min.push(minNum);
  }
   let result = [];
   for(let index = 0; index < min.length; index++) {
     if(index === max[min[index]]) {
       result.push(matrix[index][min[index]]);
     }
   }
   return result;
};

luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])
// @lc code=end

