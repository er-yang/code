/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(s.length < numRows || numRows <= 1) {
    return s;
  }
  let loopSize = 2 * numRows -2;
  let str = '';
  for(let i=0; i< numRows; i++) {
    let space = (loopSize - i * 2) || loopSize;
    str += s.charAt(i);
    let j = i + space;
    while(j < s.length) {
      str += s.charAt(j);
      space = loopSize - space;
      j += space  || loopSize;
    }
  }
  return str;
};

// P   A   H   N
// A P L S I I G
// Y   I   R
console.log(convert('PAYPALISHIRING', 3));
// @lc code=end

