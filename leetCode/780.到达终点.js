/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  if(sx === tx && sy === ty) return true;
  if(tx <sx || ty < sy || (sx + sy > tx && sx + sy > ty) || tx === ty) {
    return false;
  }
  function findPrePoint(x, y) {
    if(x === sx && y === sy) {
      return true;
    }
    if(x < sx || y < sy || x === y) {
      return false;
    }
    let multX = Math.max(sx, y);
    let multY = Math.max(sy, x);
    let preX = x > y ? x - y * (Math.floor((x - multX)/y) || 1) : x;
    let preY = y > x ? y - x * (Math.floor((y - multY)/x) || 1): y;
    return findPrePoint(preX, preY);
  }
  return findPrePoint(tx, ty);
};
// console.log('---', reachingPoints(1,1,1000000000,1));
// @lc code=end

