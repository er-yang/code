/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num, zero = true) {
  if(num === 0 && zero) {
    return 'Zero';
  }
  let en = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
           'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
           'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred', 'Thousand', 'Million', 'Billion']
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              11, 12, 13, 14, 15,16,17,18,19,
              20,30,40,50,60,70,80,90,100,1000,1000000, 1000000000];
  for(let i = nums.length; i >= 0; i--) {
    if(num > nums[i] ) {
      if(num > 100) {
        return (numberToWords(Math.floor(num / nums[i])) + ` ${en[i]} ` + numberToWords(num % nums[i], false)).trim();
      } else {
        return en[i] + ' ' + numberToWords(num % nums[i]);
      }
    } else if(num === nums[i] ) {
      if( num >= 100) {
        return 'One ' + en[i];
      }
      return en[i];
    } else {
      continue;
    }
  }
  return '';
};
// console.log(numberToWords(1234567891));
// @lc code=end

