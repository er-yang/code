/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let val = 0;
    // let maxLeftH = 0
    // let maxRightH = 0
    // for (let i = 0; i < height.length - 1; i++) {
    //     if(i > 0 && height[i] < maxLeftH) {
    //         continue
    //     }
    //     maxLeftH = Math.max(maxLeftH, height[i])
    //     maxRightH = 0
    //     for (let j = height.length - 1; j > i; j--) {
    //         if (height[j] < maxRightH ) {
    //             continue;
    //         }
    //         maxRightH = Math.max(maxRightH, height[j])
    //         const temp = Math.min(height[i], height[j]) * (j - i);
    //         if(temp > val) {
    //             val = temp;
    //         }
    //     }
    // }
    let left = 0;
    let right = height.length - 1;
    // let area = 0;
    while(left < right) {
        let temp = Math.min(height[left], height[right]) * (right - left);
        val = val > temp ? val : temp;
        height[left] > height[right] ? right-- : left ++;
    }
    return val
};
// @lc code=end

