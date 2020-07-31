/*
 * @lc app=leetcode.cn id=911 lang=javascript
 *
 * [911] 在线选举
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.times = times;
  this.persons = persons;
  this.total = [];
  let map = {};
//   for(let p of persons){
//     this.total[p] = this.total[p] || 0 + 1;
//   }
    let max = 0;
    let maxKey = undefined;
    for(let i =0; i <persons.length; i++) {
        let p = persons[i];
        if(!map[p]) {
            map[p] =0;
        }
        map[p]++;
        if(map[p] >= max) {
            this.total[i] = p;
            max = map[p];
            maxKey = p;
        }else {
            this.total[i] = maxKey;
        }
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let index = findIndex(this.times, 0, this.times.length - 1, t);
//   let middleIndex = this.times.length >> 1;
//   let sliceStart = index < middleIndex ? 0 : middleIndex;
  return this.total[index];
};
var getMaxTotal = function(arr,start, end, person) {
  let max = 0;
  let maxIndex = start;
  for(let i = start; i < end; end ++) {
    if((arr[i] && arr[i] > max) || (i ===  person && arr[i] === max)){
      max = arr[i];
      maxIndex = i;
    } 
  }
  return maxIndex
}
var findIndex = function(arr, start, end, target) {
  if(end - start < 1) {
    return start;
  }
  let middle = Math.floor((start + end) / 2 );
  if(target < arr[middle + 1] && target >= arr[middle ] ) {
    return middle;
  }
  if(target > arr[middle]) {
    return findIndex(arr, middle + 1, end, target);
  } else {
    return findIndex(arr, start, middle - 1, target);
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end

