/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * 字符与？都只有一种情况那就是匹配一个字符
 * *有三种情况，1，匹配空字符
 *            2，匹配单个字符
 *            3，匹配单个字符，且可以接着使用
 */

var isMatch = function (s, p) {
  let helper = function (str, pstr, pre) {
    if (pstr.length === 0) {
      return str.length === 0;
    }
    if (str.length === 0 && pstr.charAt(0) !== '*') {
      return false;
    }
    const char = pstr.charAt(0);
    if (char !== '*') {
      if (str.length === 0 || (char !== str.charAt(0) && char !== '?')) {
        return false;
      }
      return helper(str.substring(1), pstr.substring(1));
    } else {
      // if(pre === '*') {
      //   return false
      // }
      return (
        helper(str.substring(0), pstr.substring(1), '*') ||
        (str.length > 0 && (helper(str.substring(1), pstr.substring(1), '*') || helper(str.substring(1), pstr.substring(0))))
      );
    }
  };
  p.replace(/\*+/g, '*');
  return helper(s, p);
};
console.log(
  isMatch(
    'bbaaaabaaaaabbabbabbabbababaabababaabbabaaabbaababababbabaabbabbbbbbaaaaaabaabbbbbabbbbabbabababaaaaa',
    '******aa*bbb*aa*a*bb*ab***bbba*a*babaab*b*aa*a****',
  ),
);
// @lc code=end
