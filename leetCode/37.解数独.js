/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const emptyArr = [];
  const line = Array.from(Array(9), () => []);
  const column = Array.from(Array(9), () => []);
  const block = Array.from(Array(3), () => [[], [], []]);
  const floor = val => Math.floor(val);

  for( let [i, row] of board.entries()) {
    for(let [j, item] of row.entries()) {
      if(item === '.' || item === '.') {
        emptyArr.push([i, j])
      } else {
        const digit = Number(board[i][j]);
        line[i][digit] = column[j][digit] = block[floor(i / 3)][floor(j / 3)][digit] = true;
      }
    }
  }
  let isOver = false;
  const dfs = (emptyArr, cur) => {
    if(cur === emptyArr.length) {
      isOver = true;
      return 
    }
    const [i, j] = emptyArr[cur];
    for(let num = 1; num <= 9; num ++) {
      if(!isOver && !line[i][num] && !column[j][num] && !block[floor(i / 3)][floor(j / 3)][num]) {
        line[i][num] = column[j][num] = block[floor(i / 3)][floor(j / 3)][num] = true;
        board[i][j] = num + '';
        dfs(emptyArr, cur + 1);
        line[i][num] = column[j][num] = block[floor(i / 3)][floor(j / 3)][num] = false;
      }
    }
  }

  dfs(emptyArr, 0);
};
// @lc code=end

