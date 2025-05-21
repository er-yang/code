/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// [5, 10, 9, 2, 5, 3, 7, 101,18]
// dp[i + 1] = d[i] + 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [];
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let dpi = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                let temp = dp[j];
                temp = dp[j] + 1;
                dpi = Math.max(dpi, temp);
            }
        }
        dp[i] = dpi;
        result = Math.max(dp[i], result);
    }
    return result;
};
lengthOfLIS([4,10,4,3,8,9])
// @lc code=end

