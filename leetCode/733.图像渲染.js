/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let arived = new Set();
  let find = (nsr, nsc) => {
    let oldValue = image[nsr][nsc];
    image[nsr][nsc] = newColor;
    arived.add(`${nsr}${nsc}`);
    for(let i = 1; i <= 4; i++ ) {
      let addValue = i % 2 ? 1 : -1;
      let newNsr = i <= 2 ? nsr : nsr + addValue;
      let newNsc = i <= 2 ? nsc + addValue : nsc;
      if(arived.has(`${newNsr}${newNsc}`) || image[newNsr] === undefined ||image[newNsr][newNsc] === undefined) {
        continue;
      } else if(oldValue === image[newNsr][newNsc]){
        find(newNsr, newNsc);
      }
    }
  }
  find(sr, sc);
  return image;
};
// @lc code=end

