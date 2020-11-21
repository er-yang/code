/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let h = [];
  let v = [];
  for(let i = matrix.length -1; i >= 0; i--) {
    h[i] = [];
    v[i] = [];
    let row = matrix[i];
    for(let j = row.length - 1; j >= 0; j--) {
      if(row[j] === '1') {
        h[i][j] = 1 + (h[i][j + 1] || 0);
        v[i][j] = 1 + ((v[i + 1] &&  v[i + 1][j]) || 0);
      } else {
        h[i][j] = v[i][j] = 0;
      }
    }
  }
  let max = 0;
  for(let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for(let j = 0; j < row.length; j++) {
      let hNum = h[i][j];
      let vNum = v[i][j];
      let iIndex = 0 ;
      count = 1;
      while(iIndex  < vNum + i) {
        if(matrix[iIndex][j] === '1' && hNum <= h[iIndex][j]) {
          count ++;
        } else if(iIndex < i) {
          count = 1;
        } else if(count > 1){
          break;
        }
        iIndex ++;
      }
      let area = (count - 1) * hNum;
      max = Math.max(max, area);
    }
  }
  return max;
};

// [["1","0","1","1","1"],
// ["0","1","0","1","0"],
// ["1","1","0","1","1"],
// ["1","1","0","1","1"],
// ["0","1","1","1","1"]]

// ["1","1","1","1","1","1","1","1"],
// ["1","1","1","1","1","1","1","0"],
// ["1","1","1","1","1","1","1","0"],
// ["1","1","1","1","1","0","0","0"],
// ["0","1","1","1","1","0","0","0"]]

// console.log(maximalRectangle([["1"],["0"],["1"],["1"],["1"],["1"],["0"]]))
// console.log(maximalRectangle([["1","0","1","1","1"],["0","1","0","1","0"],["1","1","0","1","1"],["1","1","0","1","1"],["0","1","1","1","1"]]
// ));
// console.log( maximalRectangle([["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]
// ));
// @lc code=end

