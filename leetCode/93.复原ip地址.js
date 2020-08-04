/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4) {
      return [];
    }
    let result = [];
    for(let i =0; i< 3; i++) {
      let str1 = s.slice(0, i+1);
      if(!validate(str1)){
        continue;
      }
      for (let thr = s.length - 3; thr < s.length; thr++ ) {
        let str4 = s.slice(thr);
        if(!validate(str4) || thr - i < 2) {
          continue;
        }
        let sec = i + 2;
        while(sec < thr ) {
          let str2 = s.slice(i+1, sec);
          let str3 = s.slice(sec, thr);
          if(validate(str2) && validate(str3)) {
            result.push(`${str1}.${str2}.${str3}.${str4}`);
          }
          sec++;
        }
      }
    } 
    return result;
};
var validate = (str) => {
  if(str.length > 1 && str.charAt(0) === '0') {
    return false;
  }
  return str.length <= 3 && parseInt(str) <= 255 && str !== '';
}
// console.log(restoreIpAddresses('010010'));
// @lc code=end

