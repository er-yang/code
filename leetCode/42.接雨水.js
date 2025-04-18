/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                res += leftMax - height[left];
            }
            left++;
        } else {
            if(height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                res += rightMax - height[right];
            }
            right--;
        }
    }
    return res;
};
// @lc code=end

