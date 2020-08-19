/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = [];
  let helper = (arr, useP = [], useN= [], th = 0, str = '') => {
    if(arr.length <= 0) {
      res.push(str);
    }
    for(let i = 0; i < arr.length; i++) {
      let usedP = useP.slice(0);
      let usedN = useN.slice(0);
      let sum = th + arr[i] + n;
      let d = th - arr[i] + n;
      if(!usedP[sum] && !usedN[d]) {
        usedP[sum] = true;
        usedN[d] = true;
        helper([...arr.slice(0, i), ...arr.slice(i+1)], usedP, usedN, th + 1, str + arr[i]);
      } else {
        continue;
      }
    }
  }
  let arr = Array.from(Array(n), (_, index) => index);
  helper(arr);
  let result = res.map(item => {
    let strArr = item.split('');
    let temp = strArr.map(indexStr => {
      let row = Array(n).fill('.');
      row[parseInt(indexStr)] = 'Q';
      return row.join('');
    })
    return temp;
  });
  return result;
};
// console.log('-- ', JSON.stringify(solveNQueens(4)));
// 0: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 1: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 2: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 3: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 4: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 5: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 6: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 7: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 8: (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]
// @lc code=end

