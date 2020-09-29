/*
 * @lc app=leetcode.cn id=1040 lang=javascript
 *
 * [1040] 移动石子直到连续 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
  /**
   * 滑动窗口，一共n个石子，在n的空间里已经有了m个石子则其移动的最小步数为 n - m次
   * 最大次数为，目前占用的空间减去n个石子是其多余出来的空间，在第一步移动后，后续都可保证每次只减少一个额外空间
   * 
   */
  stones.sort((a,b) => a - b);
  let length = stones.length;
  let space = stones[length - 1] - stones[0] + 1 - stones.length;
  let stepOne = Math.min(stones[length - 1] - stones[length -2] - 1, stones[1] - stones[0] - 1);
  let max = space - stepOne;
  let min = max;
  let start = 0;
  let end = 0;
  for(; start < length; start ++) {
    while(end + 1 < length && stones[end + 1] - stones[start] + 1 <= length) {
      end++;
    }
    let cost = length - (end - start + 1);
    if(length - 1 === (end - start + 1) && stones[end] - stones[start] === end - start) {
      cost = 2;
    }
    min = Math.min(min, cost);
  }
  return [min, max];
};
// @lc code=end

