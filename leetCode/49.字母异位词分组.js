/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1. 哈希表
    let map = new Map();
    for (let str of strs) {
        let array = Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            array[str.charCodeAt(i) - 97]++;
        }
        let key = array.join('-');
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
    
};
// @lc code=end

