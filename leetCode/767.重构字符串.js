/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let map = {};
  for(let char of S) {
    if(map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  let s = [];
  let pointA = 0;
  let pointB = 1;
  let numAPoint = 0;
  let numBPoint = 0;
  let timesA, timesB;
  let keys = Object.keys(map).sort((a, b) => map[a] - map[b]);
  let count = keys.reduce((acc, cur) => acc + map[cur], 0);
  while(pointA < keys.length && pointB < keys.length) {
    timesA = map[keys[pointA]];
    timesB = map[keys[pointB]];
    if(numAPoint >= timesA) {
      pointA = Math.max(pointA, pointB) + 1;
      numAPoint = 0;
    }
    if(numBPoint >= timesB) {
      pointB = Math.max(pointA, pointB) + 1;
      numBPoint = 0;
    }
    numAPoint++;
    numBPoint++;
    pointA < keys.length && s.push(keys[pointA]);
    if( pointB < keys.length &&  (pointA < keys.length || numBPoint === 1)) {
      s.push(keys[pointB]);
    }
  }
  let index = Math.min(pointB, pointA);
  let unFill = S.length - s.length;
  if(index === keys.length -1 && unFill > 0 ) {
    let fillOnlast = map[keys[index]] - unFill;
    let birdge = 2 * fillOnlast;
    for(let i = 0, times=0; i<= s.length - birdge && times < unFill; i+=2, times++) {
      s.splice(i, 0, keys[index]);
    }
  }
  if(s.length < S.length) {
    return ''
  }
  return s.join('');
};

// @lc code=end

