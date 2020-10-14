/*
 * @lc app=leetcode.cn id=1220 lang=javascript
 *
 * [1220] 统计元音字母序列的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  let a=e=i=o=u=1;
  let a1=e1=i1=o1=u1=0;
  for(let k =1; k< n; k++) {
    a1 = (e + i + u) % (1e9+ 7);;
    e1 = (a + i) % (1e9+ 7);
    i1 = (e + o) % (1e9+ 7);
    o1 = i;
    u1 = (i + o) % (1e9+ 7);
    a = a1, e=e1, i=i1, o=o1,u=u1;
  }
  return (a + e + i + o + u) % (1e9 + 7)
};
// @lc code=end

