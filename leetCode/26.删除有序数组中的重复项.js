/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length;
    let pre = nums[0]
    for (let i = 1; i < nums.length;) {
        const ele = nums[i];
        if(pre === ele) {
            nums.splice(i, 1)
            continue
        }
        pre = ele;
        i++;
    }
    return nums.length;
};
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]    )
// @lc code=end

