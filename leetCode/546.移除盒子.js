/*
 * @lc app=leetcode.cn id=546 lang=javascript
 *
 * [546] 移除盒子
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  var calculatePoints = (boxes, dp,  l,  r,  k) => {
    if (l > r) return 0;
    if (dp[l][r][k] != 0) return dp[l][r][k];
    while (r > l && boxes[r] == boxes[r - 1]) {
        r--;
        k++;
    }
    dp[l][r][k] = calculatePoints(boxes, dp, l, r - 1, 0) + (k + 1) * (k + 1);
    for (let i = l; i < r; i++) {
        if (boxes[i] == boxes[r]) {
            dp[l][r][k] = Math.max(dp[l][r][k], calculatePoints(boxes, dp, l, i, k + 1) + calculatePoints(boxes, dp, i + 1, r - 1, 0));
        }
    }
    return dp[l][r][k];
}
    let dp =  Array.from(Array(100), () => Array.from(Array(100), () => Array.from(Array(100), () => 0)));
    return calculatePoints(boxes, dp, 0, boxes.length - 1, 0);

};
console.log( '---', removeBoxes([1,3,2,2,2,3,4,3,1])  )
// @lc code=end

