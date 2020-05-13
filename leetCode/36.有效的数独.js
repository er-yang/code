/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let testNoRepeat = (arr) => {
    let arrSample = arr.join('').match(/\d/g) || [];
    let arrSet = new Set(arrSample);
    return arrSet.size === arrSample.length;
  }
  let verticalArr = [];
  for(let x = 0; x < board.length ; x++ ){
    if(!testNoRepeat(board[x])) {
      return false;
    }
    for(let y = 0; y < board.length; y++) {
      if(verticalArr[y]) {
        verticalArr[y].push(board[x][y]) 
      }else {
        verticalArr[y] = [board[x][y]];
      }
      if(x % 3 === 0 && y % 3 === 0) {
        let nine = board[x].slice(y, y + 3).concat(board[x + 1].slice(y, y+3), board[x+2].slice(y, y+3));
        if(!testNoRepeat(nine)) {
          return false;
        }
      }
    }
  }
  return !verticalArr.find((val) => !testNoRepeat(val));
};
// @lc code=end

