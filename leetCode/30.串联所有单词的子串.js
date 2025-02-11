/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    const wordLength = words[0].length;
    const wordCount = words.length;
    const totalLength = wordLength * wordCount;
    const map = new Map();
    for (let word of words) {
        map.set(word, map.has(word) ? map.get(word) + 1 : 1)
    }
    for (let i = 0; i <= s.length - totalLength; i++) {
        const tempMap = new Map(map);
        for (let j = i; j <= i + totalLength - wordLength; j = j + wordLength) {
            const str = s.slice(j, j + wordLength);
            if (tempMap.has(str)) {
                const count = tempMap.get(str);
                if (count <= 0) {
                    break;
                } else {
                    tempMap.set(str, count - 1);
                }
            } else {
                break;
            }
            if(j === i  + totalLength - wordLength) {
                result.push(i);
            }
        }
    }
    return result;
};
// @lc code=end

