/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let result = [];
 
  for(let i of asteroids) {
    let insert = true;
    while(i < 0 && result[result.length - 1] > 0) {
      if(result[result.length - 1] > Math.abs(i)) {
        insert = false;
        break;
      } else {
        let temp = result.pop();
        if(temp === Math.abs(i)) {
          insert = false;
          break;
        } else {
          insert = true;
          continue;
        }
      }
    }
    if(insert) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end

